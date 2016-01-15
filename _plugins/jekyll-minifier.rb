require 'yui/compressor'
require 'htmlcompressor'

Jekyll::Hooks.register :site, :post_render do |site|
  #TODO use exclude
  for doc in site.documents
    doc.output = Compressor::compress_html(doc.output)
  end
  for page in site.pages
    #puts "#{page.path}"
    page.output = Compressor::compress_html(page.output)
  end
  for file in site.static_files
    #puts "#{file.relative_path}"
  end
end

module Compressor
  def self.exclude?(dest, dest_path)
    res = false
    file_name = dest_path.slice(dest.length+1..dest_path.length)
    exclude = @site.config['jekyll-minifier'] && @site.config['jekyll-minifier']['exclude']
    if exclude
      if exclude.is_a? String
        exclude = [exclude]
      end
      exclude.each do |e|
        if e == file_name || File.fnmatch(e, file_name)
          res = true
          break
        end
      end
    end
    res
  end

  def self.compress_html(content)
    compressor = HtmlCompressor::Compressor.new({ :compress_css => true, :compress_javascript => true, :css_compressor => :yui, :javascript_compressor => :yui })
    return compressor.compress(content)
  end

  def self.compress_js(content)
    compressor = YUI::JavaScriptCompressor.new({ :munge => true, :preserve_semicolons => true, :optimize => true, :line_break => nil })
    return compressor.compress(content)
  rescue compressor::ParseError => e
    warn "Warning: parse error.  Don't panic - just using original content"
    warn "Details: #{e.message.strip}"
    return content
  end

  def self.compress_css(content)
    compressor = YUI::CssCompressor.new({ :line_break =>  -1 })
    return compressor.compress(content)
  rescue compressor::RuntimeError => e
    warn "Warning: parse error.  Don't panic - just using original content"
    warn "Details: #{e.message.strip}"
    return content
  end
end

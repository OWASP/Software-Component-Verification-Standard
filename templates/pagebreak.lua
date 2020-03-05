--- Return a block element causing a page break in the given format.
local function newpage(format)
  if format == 'docx' then
    local pagebreak = '<w:p><w:r><w:br w:type="page"/></w:r></w:p>'
    return pandoc.RawBlock('openxml', pagebreak)
  elseif format:match 'html.*' then
    return pandoc.RawBlock('html', '<div style=""></div>')
  elseif format:match 'tex$' then
    return pandoc.RawBlock('tex', '\\newpage{}')
  elseif format:match 'epub' then
    local pagebreak = '<p style="page-break-after: always;"> </p>'
    return pandoc.RawBlock('html', pagebreak)
  else
    -- fall back to insert a form feed character
    return pandoc.Para{pandoc.Str '\f'}
  end
end

-- Filter function called on each RawBlock element.
function RawBlock (el)
  -- check that the block is TeX or LaTeX and contains only \newpage or
  -- \pagebreak.
  if el.text:match '\\newpage' then
    -- use format-specific pagebreak marker. FORMAT is set by pandoc to
    -- the targeted output format.
    return newpage(FORMAT)
  end
  -- otherwise, leave the block unchanged
  return nil
end

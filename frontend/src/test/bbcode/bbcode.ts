
export const bbcodTestCases = [
  {
    id: 'blank',
    test: '',
  },
  {
    id: 'newlines',
    test: 'multiple lines\nnew line\n\n\n3 blank lines\n'},
  {
    id: 'color',
    test: '[highlight=#b2b200][color=#0066cc]color[/color][/highlight]',
  },
  {
    id: 'color2',
    test: '[color=#6b24b2]purple[/color][color=#e60000]red[/color][highlight=#b2b200][color=#e60000]WithYellowBG[/color][/highlight][highlight=#b2b200][color=#66a3e0]NOW_BLUE_TEXT[/color][/highlight]',
  },
  {
    id: 'color_rainbow',
    test: '[highlight=#cce0f5]           [/highlight][highlight=#cce0f5][color=#e60000]I [/color][/highlight][highlight=#cce0f5][color=#ff9900]AM[/color][/highlight][highlight=#cce0f5][color=#ffff00] A[/color][/highlight][highlight=#cce0f5][color=#66b966] R[/color][/highlight][highlight=#cce0f5][color=#cce8cc]AI[/color][/highlight][highlight=#cce0f5][color=#0066cc]NB[/color][/highlight][highlight=#cce0f5][color=#9933ff]OW[/color][/highlight][highlight=#cce0f5][color=#ffffff]         [/color][/highlight]\n[highlight=#cce0f5][color=#ffffff]                                                 [/color][/highlight]\n[highlight=#facccc]Did you see a rainbow in sky? [/highlight]',
  },
  {
    id: 'space',
    test: '[highlight=#cce0f5]                  space    around               [/highlight]\n[highlight=#cce0f5]                                                          [/highlight]',
  },
  {
    id: 'color_fontsize',
    test: '[color=#9933ff][size=huge]Huge Purple[/size][/color][highlight=#facccc][color=#0047b2][size=small]Small Blue[/size][/color][/highlight]',
  },
  {
    id: 'font-size',
    test: '[size=40]如果是数字，就被分font size如果是数字，就被分到巨大 /大 /正常 /小四种大小中去[/size]',
  },
  {
    id: 'long-eng',
    test: '[size=40]long para long para /long para long/ para /long paralong paralong/ paralong paralong paralong paralong paralong paralong para[/size]',
  },
  {
    id: 'color-2',
    test: '[color=#3CB371]原谅色一号[/color]\n[color=#2E8B57]原谅色二号[/color]\n[color=#40E0D0]原谅色三号[/color]\n[color=#48D1CC]原谅色四号[/color]\n[color=#20B2AA]原谅色五号[/color]',
  },
  {
    id: 'bold',
    test: 'There is some [b]Bold[/b] text',
  },
  {
    id: 'italic',
    test: 'there is some [i]italic [/i]text',
  },
  {
    id: 'italic_bold',
    test: 'there is some [b][i]italic and bold [/i][/b]text',
  },
  {
    id: 'underscore',
    test: 'Text with [u]Underscore[/u] lol \n[u]there is some [/u][b][i][u]italic and bold [/u][/i][/b][u]text[/u]',
  },
  {
    id: 'underscore_strikethrough',
    test: 'Text with [s][u]Underscore strikethrough  [/u][/s]   lol\n[u]there is some [/u][b][i][u]italic and bold [/u][/i][/b][u]text[/u]',
  },
  {
    id: 'strike_fail',
    test: '[s]让我试试[／s]',
  },
  {
    id: 'quote',
    test: '[blockquote]quote[/blockquote]\nNot quote',
  },
  {
    id: 'complex',
    test: '[i][color=#0000FF]发[/color][/i][i][color=#0000CD]送[/color][/i][i][color=#191970]一[/color][/i][i][color=#00008B]下[/color][/i][b][size=50][color=#000080]蓝[/color][/size][/b][b][size=38][color=#4169E1]色[/color][/size][/b][color=#6495ED]字[/color][color=#B0C4DE]体[/color]([s][color=#1E90FF]好累(´༎ຶД༎ຶ`)[/color][/s])',
  },
  {
    id: 'complex2',
    test: '[s][highlight=yellow][i][b][u][size=30][color=#58FF05][/color][color=#63F00F]我[/color][color=#7BD323]是[/color][color=#93B637]彩[/color][color=#AB984B]色[/color][color=#C37B5F]的[/color][color=#DB5E73]吗[/color][color=#F34187][/color][/size][/u][/b][/i][/highlight][/s]',
  },
  {
    id: 'complex3',
    test: '[br]\n[blockquote]为什么要在quote中放代码[code]为什么要在代码中放list[ol][li]为什么老站还支持这个[ul][li]新站可以不支持吗[u]它[size=20]只是[i]代码[b]放[/b][/i][/size][/u][/li][li]过它[/li][/ul][/li][li]不要给代码加style嚶嚶嚶[/li][/ol][/code][/blockquote]\n',
  },
  {
    id: 'complex4',
    test: '[size=23][color=#483D8B]我[/color][/size][size=26][color=#6A5ACD]来[/color][/size][size=27][color=#7B68EE]试[/color][/size][size=28][color=#9370DB]试[/color][/size][size=29][color=#6495ED]渐[/color][/size][size=30][color=#4169E1]变[/color][/size][size=31][color=#0000CD]色[/color][/size]',
  },
  /* IMPORTANT: multiline quote render differently on the old sosad website and the current textEditor.
  * when we have a multiline quote, the old sosad editor will do
  *                  [blockquote]line1 \n line2[/blockquote]
  * but the quill editor will force to start a new blockquote when a new line starts:
  *                  [blockquote]line1[/blockquote]
  *                  [blockquote]line2[/blockquote]
  * in the old sosad website, there will be margin between two blockquote, so they will render differently
  * as this is how Quill handles quote, fixing quill may be hard. It should be easier to ajust the old website's css.
  * the old bbcode document generated by the old sosad website should render fine in the new editor, but the bbcode generated by the new editor may look weird in the old site, which can be fixed by modify blockquote css margin.
  */
  {
    id: 'multiline_quote',
    test: '[blockquote]mutline\nis not working[/blockquote][blockquote]quote[/blockquote]\nnot quote',
  },
  {
    id: 'list',
    test: '[ol][li]number list[/li]\n[li]l2[/li]\n[li]l3[/li]\n[/ol]\n\n[ul][li]unorder list[/li]\n[li]l2[/li]\n[li]l3[/li]\n[/ul]',
  },
  {
    id: 'fail-list',
    test: 'fail list:\n 【U】试一下～【／U】',
  },
  {
    id: 'nested-list',
    test: '[ol][li]fsaf[/li]\n[li=indent-1]fsdf[/li]\n[li=indent-1]fsd[/li]\n[li=indent-2]sdf[/li]\n[li=indent-1]fsdf[/li]\n[li]fsdfs[/li]\n[/ol]',
  },
  {
    id: 'nested-ulist',
    test: '[ul][li]fsdf[/li]\n[li]fsdf[/li]\n[li=indent-1]fsdf[/li]\n[li=indent-2]fsdf[/li]\n[li=indent-1]fsdf[/li]\n[li]fsdf[/li]\n[/ul]',
  },
  {
    id: 'list-with-style',
    test: '[ul][li][color=#9933ff]fsdf[/color][/li]\n[li][highlight=#facccc]fsdf[/highlight][/li]\n[li=indent-1][b]fsdf[/b][/li]\n[li=indent-2][i]fsdf[/i][/li][li=indent-1][s]fsdf[/s][/li]\n[li]fsdf[/li]\n[/ul]',
  },
  {
    id: 'link',
    test: '[url=https://www.google.com/]link[/url]',
  },
  {
    id: 'img',
    test: '[img]https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80[/img]\n',
  },
  {
    id:'img',
    test: 'the img is huge [img]http://ftp.bmp.ovh/imgs/2020/01/50ae11d9d32078ca.jpg[/img]',
  },
  {
    id: 'code',
    test: '[code]let a = 1;\nlet b = 2;\nfor (let i = 0; i < b; i++){\n  console.log("hello world");\n}\n[/code]',
  }, // todo
  {
    id: 'br',
    test: 'the next line is br[br]a br before\nNote：如果你先测了之前的code test case, 这个test case可能也有code style，这似乎是quill中的一个bug。在实际运用中，我们尽量不要更改给TextEditor的props （content），只是在initialize 的时候pass一个content，那么就不会遇到这个bug。',
  },
  {
    id: 'complex',
    test: '[b]1[i]2[u]3[size=20][code]4567[/code][/size][/u][/i][/b]',
  }, // FIXME
  {
    id: 'fix_space_around_text',
    test: '[i]我[/i] [b]学[/b] [u]会[/u] [size=40]了[/size]',
  }, // FIXME：字间距也需要调调
  {
    id: 'complex2',
    test: '[color=#58FF05]"[/color][color=#63F00F]好[/color][color=#6FE119]像[/color][color=#7BD323]有点[/color][color=#87C42D]打[/color][color=#93B637]错[/color][color=#9FA741]了[/color][color=#AB984B]，[/color][color=#B78A55]怎[/color][color=#C37B5F]么[/color][color=#CF6D69]办[/color][color=#DB5E73]呀[/color][color=#E7507D]？[/color][color=#F34187]"[/color]',
  },
  {
    id:'gif',
    test: '感人了gif好使耶[img]http://img03.sogoucdn.com/app/a/100540022/2018072618104666664769.gif[/img]',
  },
  {
    id: 'complex3',
    test: '[color=#006400]想要个高贵冷艳的绿色[/color]\n[color=#800000]再来一个气场全开牛血色[/color]\n常规[i]优雅斜体[/i][b]加粗[/b][s]划掉[/s]\n[size=10]顺[/size][size=15]便[/size][size=20]试[/size][size=25]一[/size][size=30]下[/size][size=35]字[/size][size=40]号[/size]\n',
  },
  {
    id: 'special-char6',
    test: '🕯🇨🇳💻💔🙏👌👌🏻😱🤣🙊💤🐴耶✌🏻👍🏻⛅👩‍💻💪💪🏻🌹👴💢',
  },
  {
    id: 'special-char7',
    test: '=͟͟͞͞(꒪⌓꒪*)\n…Zz｡_:(ꈍ﹃ꈍ」 ∠)\n(⸝⸝⸝ᵒ̴̶̷̥́⌑ᵒ̴̶̷̣̥̀⸝⸝⸝)\n(⁎⁍̴̛ᴗ⁍̴̛⁎) ʕ•̫͡•ོʔ•̫͡•ཻʕ•̫͡•ʔ•͓͡•ʔ\n(｡ ́︿ ̀｡)\n(ﾟ⊿ﾟ)ﾂ\n-(￢∀￢)σ\n(¦3[▓▓]\n_(:з」∠)_\n_(:_」∠)_  ᶘ ͡°ᴥ͡°ᶅ',
  },
  {
    id: 'wrong-emoj',
    test: '［pic=02］',
  },
  {
    id: 'special-char12',
    test: '=- 今天?   - 没有',
  }
];
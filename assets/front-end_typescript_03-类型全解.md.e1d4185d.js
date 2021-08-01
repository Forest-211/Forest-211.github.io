import{o as n,c as s,b as a}from"./app.ee89e8a3.js";const p='{"title":"类型全解","description":"","frontmatter":{},"headers":[{"level":2,"title":"字符串","slug":"字符串"},{"level":2,"title":"数字","slug":"数字"},{"level":2,"title":"布尔值","slug":"布尔值"},{"level":2,"title":"symbol","slug":"symbol"},{"level":2,"title":"any","slug":"any"},{"level":2,"title":"unknown","slug":"unknown"},{"level":2,"title":"void、undefined、null","slug":"void、undefined、null"},{"level":2,"title":"never","slug":"never"}],"relativePath":"front-end/typescript/03-类型全解.md","lastUpdated":1627858287896}',t={},o=a('<h1 id="类型全解"><a class="header-anchor" href="#类型全解" aria-hidden="true">#</a> 类型全解</h1><p>在语法层面，缺省类型注解的 TypeScript 与 JavaScript 完全一致。因此，我们可以把 TypeScript 代码的编写看作是为 JavaScript 代码添加类型注解 在 JavaScript 中，原始类型指的是非对象且没有方法的数据类型，它包括 string、number、bigint、boolean、undefined 和 symbol 这六种 (null 是一个伪原始类型，它在 JavaScript 中实际上是一个对象，且所有的结构化类型都是通过 null 原型链派生而来)。原始类型值是最底层的实现，对应到 TypeScript 中同样也是最底层的类型</p><h2 id="字符串"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><p>在 JavaScript 中，我们可以使用string表示 JavaScript 中任意的字符串(包括模板字符串)，具体示例如下所示：</p><div class="language-js"><pre><code><span class="token keyword">let</span> firstname<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;Forest&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 字符串字面量</span>\n<span class="token keyword">let</span> familyname<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 显式类型转换</span>\n<span class="token keyword">let</span> fullname<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>firstname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>familyname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span> <span class="token comment">// 模板字符串</span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>所有 JavaScript 支持的定义字符串的方法，我们都可以直接在 TypeScript 中使用</p></div><h2 id="数字"><a class="header-anchor" href="#数字" aria-hidden="true">#</a> 数字</h2><p>同样，我们可以使用number类型表示 JavaScript 已经支持或者即将支持的十进制整数、浮点数，以及二进制数、八进制数、十六进制数，具体的示例如下所示：</p><div class="language-js"><pre><code><span class="token comment">/** 十进制整数 */</span>\n<span class="token keyword">let</span> integer<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\n\n<span class="token comment">/** 十进制整数 */</span>\n<span class="token keyword">let</span> integer2<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/** 十进制浮点数 */</span>\n<span class="token keyword">let</span> decimal<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>\n\n<span class="token comment">/** 二进制整数 */</span>\n<span class="token keyword">let</span> binary<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span>\n\n<span class="token comment">/** 八进制整数 */</span>\n<span class="token keyword">let</span> octal<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0o744</span><span class="token punctuation">;</span>\n\n<span class="token comment">/** 十六进制整数 */</span>\n<span class="token keyword">let</span> hex<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>\n</code></pre></div><p>如果使用较少的大整数，那么我们可以使用bigint类型来表示</p><div class="language-js"><pre><code><span class="token keyword">let</span> big<span class="token operator">:</span> bigint <span class="token operator">=</span>  <span class="token number">100n</span><span class="token punctuation">;</span>\n</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>虽然number和bigint都表示数字，但是这两个类型不兼容。</p></div><h2 id="布尔值"><a class="header-anchor" href="#布尔值" aria-hidden="true">#</a> 布尔值</h2><p>使用boolean表示 true 或者 false，该值可以比较(==、===、||、&amp;&amp;)、可以否定(!)</p><div class="language-js"><pre><code><span class="token comment">/** TypeScript 真香 为 真 */</span>\n<span class="token keyword">let</span> typeScriptIsGreat<span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n <span class="token comment">/** TypeScript 太糟糕了 为 否 */</span>\n<span class="token keyword">let</span> typeScriptIsBad<span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="symbol"><a class="header-anchor" href="#symbol" aria-hidden="true">#</a> symbol</h2><p>自 ECMAScript 6 起，TypeScript 开始支持新的Symbol原始类型， 即我们可以通过Symbol构造函数，创建一个独一无二的标记；同时，还可以使用symbol表示如下代码所示的类型</p><div class="language-js"><pre><code><span class="token keyword">let</span> sym1<span class="token operator">:</span> symbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> sym2<span class="token operator">:</span> symbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;42&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>TypeScript 还包含 Number、String、Boolean、Symbol 等类型(注意区分大小写)；当为大写时表示类型字面量</p></div><h2 id="any"><a class="header-anchor" href="#any" aria-hidden="true">#</a> any</h2><p>any指的是一个任意类型，是类型中的教父。为了目的它不惜一切代价，但是不要轻易请它纯棉，除非不得已；在TypeScript中，编译时一定都要有类型，如果你无法确定类型是什么，默认为any；这是个兜底类型，应该尽可能的避免使用；any类型的值就像常规的JavaScript一样，我们可以对被注解为 any 类型的变量进行任何操作，包括获取事实上并不存在的属性、方法，并且 TypeScript 还无法检测其属性是否存在、类型是否正确。类型检查器完全发挥不了作用</p><div class="language-js"><pre><code><span class="token keyword">let</span> anything<span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nanything<span class="token punctuation">.</span><span class="token function">doAnything</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不会提示错误</span>\nanything <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 不会提示错误</span>\nanything <span class="token operator">=</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 不会提示错误</span>\n\n<span class="token keyword">let</span> num<span class="token operator">:</span> number <span class="token operator">=</span> anything<span class="token punctuation">;</span> <span class="token comment">// 不会提示错误</span>\n<span class="token keyword">let</span> str<span class="token operator">:</span> string <span class="token operator">=</span> anything<span class="token punctuation">;</span> <span class="token comment">// 不会提示错误</span>\n</code></pre></div><p>any 类型会在对象的调用链中进行传导，即所有 any 类型的任意属性的类型都是 any</p><div class="language-js"><pre><code><span class="token keyword">let</span> anything<span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> z <span class="token operator">=</span> anything<span class="token punctuation">.</span>x<span class="token punctuation">.</span>y<span class="token punctuation">.</span>z<span class="token punctuation">;</span> <span class="token comment">// z 类型是 any，不会提示错误</span>\n<span class="token function">z</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不会提示错误</span>\n</code></pre></div><h2 id="unknown"><a class="header-anchor" href="#unknown" aria-hidden="true">#</a> unknown</h2><p>unknown类型，它主要用来描述类型并不确定的变量；unknown类型的值可以比较、可以否定、可以使用JavaScript的typeof和instanceof运算符细化</p><p>比如在多个 if else 条件分支场景下，它可以用来接收不同条件下类型各异的返回值的临时变量，如下代码所示：</p><div class="language-js"><pre><code><span class="token keyword">let</span> result<span class="token operator">:</span> unknown<span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  result <span class="token operator">=</span> <span class="token function">x</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  result <span class="token operator">=</span> <span class="token function">y</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token operator">...</span>\n</code></pre></div><p>与 any 不同的是，unknown 在类型上更安全。比如我们<em><strong>可以将任意类型的值赋值给 unknown，但 unknown 类型的值只能赋值给 unknown 或 any</strong></em>，如下代码所示：</p><div class="language-js"><pre><code><span class="token keyword">let</span> result<span class="token operator">:</span> unknown<span class="token punctuation">;</span>\n<span class="token keyword">let</span> num<span class="token operator">:</span> number <span class="token operator">=</span> result<span class="token punctuation">;</span> <span class="token comment">// 提示 ts(2322)</span>\n<span class="token keyword">let</span> anything<span class="token operator">:</span> any <span class="token operator">=</span> result<span class="token punctuation">;</span> <span class="token comment">// 不会提示错误</span>\n</code></pre></div><p>使用 unknown 后，TypeScript 会对它做类型检测。但是，如果不缩小类型（Type Narrowing），我们对 unknown 执行的任何操作都会出现如下所示错误：</p><div class="language-js"><pre><code><span class="token keyword">let</span> result<span class="token operator">:</span> unknown<span class="token punctuation">;</span>\nresult<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 提示 ts(2571)</span>\n</code></pre></div><p>而所有的类型缩小手段对 unknown 都有效，如下代码所示：</p><div class="language-js"><pre><code><span class="token keyword">let</span> result<span class="token operator">:</span> unknown<span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  result<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 此处 hover result 提示类型是 number，不会提示错误</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="void、undefined、null"><a class="header-anchor" href="#void、undefined、null" aria-hidden="true">#</a> void、undefined、null</h2><p>void 类型，它仅适用于表示没有返回值的函数。即如果该函数没有返回值，那它的类型就是 void。在 strict 模式下，声明一个 void 类型的变量几乎没有任何实际用处，因为我们不能把 void 类型的变量值再赋值给除了 any 和 unkown 之外的任何类型变量。</p><p>undefined 类型 和 null 类型，它们是 TypeScript 值与类型关键字同名的唯二例外</p><div class="language-js"><pre><code><span class="token keyword">let</span> undeclared<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> nullable<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> \n</code></pre></div><p>undefined 的最大价值主要体现在接口类型上，它表示一个可缺省、未定义的属性。</p><p>我们可以把 undefined 值或类型是 undefined 的变量赋值给 void 类型变量，反过来，类型是 void 但值是 undefined 的变量不能赋值给 undefined 类型。</p><div class="language-js"><pre><code><span class="token keyword">const</span> userInfo<span class="token operator">:</span> <span class="token punctuation">{</span>\n  id<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> undeclared<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> unusable<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\nunusable <span class="token operator">=</span> undeclared<span class="token punctuation">;</span> <span class="token comment">// ok</span>\nundeclared <span class="token operator">=</span> unusable<span class="token punctuation">;</span> <span class="token comment">// ts(2322)</span>\n</code></pre></div><p>除此之外，undefined 和 null 类型还具备警示意义，它们可以提醒我们针对可能操作这两种（类型）值的情况做容错处理。也就是在操作之前判断值的类型是否支持当前的操作，类型守卫既能通过类型缩小影响 TypeScript 的类型检测，也能保障 JavaScript 运行时的安全性，如下代码所示：</p><div class="language-js"><pre><code><span class="token keyword">const</span> user<span class="token operator">:</span> <span class="token punctuation">{</span>\n  id<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>\n  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> string\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Captain&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>userInfo<span class="token punctuation">.</span>id <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n  userInfo<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// id 的类型缩小成 number</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>我们可以使用非空断言来排除值可能为 null 或 undefined 的情况，但是这样很不安全。</p><div class="language-js"><pre><code>userInfo<span class="token punctuation">.</span>id<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \nuserInfo<span class="token punctuation">.</span>name<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><p>而比非空断言更安全、类型守卫更方便的做法是使用单问号（Optional Chain）、双问号（空值合并），我们可以使用它们来保障代码的安全性，如下代码所示：</p><div class="language-js"><pre><code>userInfo<span class="token punctuation">.</span>id<span class="token operator">?.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Optional Chain</span>\n<span class="token keyword">const</span> myName <span class="token operator">=</span> userInfo<span class="token punctuation">.</span>name<span class="token operator">??</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>info<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span> <span class="token comment">// 空值合并</span>\n</code></pre></div><h2 id="never"><a class="header-anchor" href="#never" aria-hidden="true">#</a> never</h2><p>never 表示永远不会发生值的类型</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">ThrowError</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> never <span class="token punctuation">{</span>\n  <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>以上函数因为永远不会有返回值，所以它的返回值类型就是 never。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>never 是所有类型的子类型，它可以给所有类型赋值；但是反过来，除了 never 自身以外，其他类型（包括 any 在内的类型）都不能为 never 类型赋值。</p></div><div class="language-js"><pre><code><span class="token keyword">let</span> Unreachable<span class="token operator">:</span> never <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> \t\t\t<span class="token comment">// 报错</span>\nUnreachable <span class="token operator">=</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span> \t\t\t\t\t<span class="token comment">// 报错</span>\nUnreachable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> \t\t\t\t\t\t\t<span class="token comment">// 报错</span>\n<span class="token keyword">let</span> num<span class="token operator">:</span> number <span class="token operator">=</span> Unreachable<span class="token punctuation">;</span> \t\t<span class="token comment">// ok</span>\n<span class="token keyword">let</span> str<span class="token operator">:</span> string <span class="token operator">=</span> Unreachable<span class="token punctuation">;</span> \t\t<span class="token comment">// ok</span>\n<span class="token keyword">let</span> bool<span class="token operator">:</span> boolean <span class="token operator">=</span> Unreachable<span class="token punctuation">;</span> \t<span class="token comment">// ok</span>\n</code></pre></div>',53);t.render=function(a,p,t,e,c,l){return n(),s("div",null,[o])};export default t;export{p as __pageData};

import{o as n,c as a,d as s}from"./app.2ba9d1f1.js";const t='{"title":"React Navigation","description":"","frontmatter":{},"headers":[{"level":2,"title":"React Navigation","slug":"react-navigation"},{"level":3,"title":"相关属性","slug":"相关属性"},{"level":2,"title":"3、DrawerNavigator属性介绍","slug":"_3、drawernavigator属性介绍"},{"level":2,"title":"基本使用","slug":"基本使用"},{"level":3,"title":"搭建项目","slug":"搭建项目"},{"level":3,"title":"安装","slug":"安装"},{"level":2,"title":"实现Tab界面切换、界面间导航","slug":"实现tab界面切换、界面间导航"},{"level":2,"title":"界面间跳转、传值、取值","slug":"界面间跳转、传值、取值"}],"relativePath":"front-end/react-native/04.md","lastUpdated":1624329940217}',p={},o=s('<h2 id="react-navigation"><a class="header-anchor" href="#react-navigation" aria-hidden="true">#</a> React Navigation</h2><p><a href="https://reactnavigation.org/" target="_blank" rel="noopener noreferrer">React Navigation</a>是 Facebook、Expo 和社区的开发者们合作的结果，是基于 Javascript 的可扩展且使用简单的导航解决方案需求的组件。</p><h3 id="相关属性"><a class="header-anchor" href="#相关属性" aria-hidden="true">#</a> 相关属性</h3><h4 id="stacknavigator属性"><a class="header-anchor" href="#stacknavigator属性" aria-hidden="true">#</a> StackNavigator属性</h4><ul><li><p>navigationOptions：配置StackNavigator的一些属性。</p></li><li><p>title：标题，如果设置了这个导航栏和标签栏的title就会变成一样的，不推荐使用</p></li><li><p>header：可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null</p></li><li><p>headerTitle：设置导航栏标题，推荐</p></li><li><p>headerBackTitle：设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null</p></li><li><p>headerTruncatedBackTitle：设置当上个页面标题不符合返回箭头后的文字时，默认改成&quot;返回&quot;</p></li><li><p>headerRight：设置导航条右侧。可以是按钮或者其他视图控件</p></li><li><p>headerLeft：设置导航条左侧。可以是按钮或者其他视图控件</p></li><li><p>headerStyle：设置导航条的样式。背景色，宽高等</p></li><li><p>headerTitleStyle：设置导航栏文字样式</p></li><li><p>headerBackTitleStyle：设置导航栏‘返回’文字样式</p></li><li><p>headerTintColor：设置导航栏颜色</p></li><li><p>headerPressColorAndroid：安卓独有的设置颜色纹理，需要安卓版本大于5.0</p></li><li><p>gesturesEnabled：是否支持滑动返回手势，iOS默认支持，安卓默认关闭</p></li><li><p>screen：对应界面名称，需要填入import之后的页面</p></li><li><p>mode：定义跳转风格</p></li><li><p>card：使用iOS和安卓默认的风格</p></li><li><p>modal：iOS独有的使屏幕从底部画出。类似iOS的present效果</p></li><li><p>headerMode：返回上级页面时动画效果</p></li><li><p>float：iOS默认的效果</p></li><li><p>screen：滑动过程中，整个页面都会返回</p></li><li><p>none：无动画</p></li><li><p>cardStyle：自定义设置跳转效果</p></li><li><p>transitionConfig： 自定义设置滑动返回的配置</p></li><li><p>onTransitionStart：当转换动画即将开始时被调用的功能</p></li><li><p>onTransitionEnd：当转换动画完成，将被调用的功能</p></li><li><p>path：路由中设置的路径的覆盖映射配置</p></li><li><p>initialRouteName：设置默认的页面组件，必须是上面已注册的页面组件</p></li><li><p>initialRouteParams：初始路由参数</p></li></ul><div class="tip custom-block"><p class="custom-block-title">注意：</p><p>path属性适用于其他app或浏览器使用url打开本app并进入指定页面。path属性用于声明一个界面路径，例如：【/pages/Home】。此时我们可以在手机浏览器中输入：app名称://pages/Home来启动该App，并进入Home界面。</p></div><h4 id="tabnavigator属性介绍"><a class="header-anchor" href="#tabnavigator属性介绍" aria-hidden="true">#</a> TabNavigator属性介绍</h4><ul><li><p>screen：和导航的功能是一样的，对应界面名称，可以在其他页面通过这个screen传值和跳转。</p></li><li><p>navigationOptions：配置TabNavigator的一些属性</p></li><li><p>title：标题，会同时设置导航条和标签栏的title</p></li><li><p>tabBarVisible：是否隐藏标签栏。默认不隐藏(true)</p></li><li><p>tabBarIcon：设置标签栏的图标。需要给每个都设置</p></li><li><p>tabBarLabel：设置标签栏的title。推荐</p></li></ul><h4 id="导航栏配置"><a class="header-anchor" href="#导航栏配置" aria-hidden="true">#</a> 导航栏配置</h4><ul><li><p>tabBarPosition：设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：‘top’，‘bottom’）</p></li><li><p>swipeEnabled：是否允许在标签之间进行滑动</p></li><li><p>animationEnabled：是否在更改标签时显示动画</p></li><li><p>lazy：是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true</p></li><li><p>trueinitialRouteName： 设置默认的页面组件</p></li><li><p>backBehavior：按 back 键是否跳转到第一个Tab(首页)， none 为不跳转</p></li><li><p>tabBarOptions：配置标签栏的一些属性iOS属性</p></li><li><p>activeTintColor：label和icon的前景色 活跃状态下</p></li><li><p>activeBackgroundColor：label和icon的背景色 活跃状态下</p></li><li><p>inactiveTintColor：label和icon的前景色 不活跃状态下</p></li><li><p>inactiveBackgroundColor：label和icon的背景色 不活跃状态下</p></li><li><p>showLabel：是否显示label，默认开启 style：tabbar的样式</p></li><li><p>labelStyle：label的样式安卓属性</p></li><li><p>activeTintColor：label和icon的前景色 活跃状态下</p></li><li><p>inactiveTintColor：label和icon的前景色 不活跃状态下</p></li><li><p>showIcon：是否显示图标，默认关闭</p></li><li><p>showLabel：是否显示label，默认开启 style：tabbar的样式</p></li><li><p>labelStyle：label的样式 upperCaseLabel：是否使标签大写，默认为true</p></li><li><p>pressColor：material涟漪效果的颜色（安卓版本需要大于5.0）</p></li><li><p>pressOpacity：按压标签的透明度变化（安卓版本需要小于5.0）</p></li><li><p>scrollEnabled：是否启用可滚动选项卡 tabStyle：tab的样式</p></li><li><p>indicatorStyle：标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题</p></li><li><p>labelStyle：label的样式</p></li><li><p>iconStyle：图标样式</p></li></ul><h2 id="_3、drawernavigator属性介绍"><a class="header-anchor" href="#_3、drawernavigator属性介绍" aria-hidden="true">#</a> 3、DrawerNavigator属性介绍</h2><h4 id="drawernavigatorconfig"><a class="header-anchor" href="#drawernavigatorconfig" aria-hidden="true">#</a> DrawerNavigatorConfig</h4><ul><li><p>drawerWidth - 抽屉的宽度</p></li><li><p>drawerPosition - 选项是左或右。 默认为左侧位置</p></li><li><p>contentComponent - 用于呈现抽屉内容的组件，例如导航项。 接收抽屉的导航。 默认为DrawerItems</p></li><li><p>contentOptions - 配置抽屉内容</p></li><li><p>initialRouteName - 初始路由的routeName</p></li><li><p>order - 定义抽屉项目顺序的routeNames数组。</p><ul><li>路径 - 提供routeName到路径配置的映射，它覆盖routeConfigs中设置的路径。</li><li>backBehavior - 后退按钮是否会切换到初始路由？ 如果是，设置为initialRoute，否则为none。 默认为initialRoute行为</li></ul></li></ul><h4 id="draweritems的contentoptions属性"><a class="header-anchor" href="#draweritems的contentoptions属性" aria-hidden="true">#</a> DrawerItems的contentOptions属性</h4><ul><li>activeTintColor - 活动标签的标签和图标颜色</li><li>activeBackgroundColor - 活动标签的背景颜色</li><li>inactiveTintColor - 非活动标签的标签和图标颜色</li><li>inactiveBackgroundColor - 非活动标签的背景颜色 内容部分的样式样式对象</li><li>labelStyle - 当您的标签是字符串时，要覆盖内容部分中的文本样式的样式对象</li></ul><p>从上述中大致了解了react-navigation三种组件的一些基本属性，所以到我们甩起袖子撸代码见证下奇迹了。</p><h2 id="基本使用"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><h3 id="搭建项目"><a class="header-anchor" href="#搭建项目" aria-hidden="true">#</a> 搭建项目</h3><div class="language-shell"><pre><code>$ npx react-native init musicqq --template react-native-template-typescript\n</code></pre></div><h3 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-shell"><pre><code>$ <span class="token function">npm</span> <span class="token function">install</span> @react-navigation/native\nor\n$ <span class="token function">yarn</span> <span class="token function">add</span> @react-navigation/native\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>上面命令执行成功后，就安装了navigation的核心组件库了，但是在使用导航过程会涉及一些手势响应、动画交互、原生兼容等等；所以接下来安装一些支持这些操作的第三方依赖。</p></div><div class="language-shell"><pre><code>$ <span class="token function">npm</span> i react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\nor\n$ <span class="token function">yarn</span> <span class="token function">add</span> react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n</code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>React Native版本在0.6以上就不用手动<code>link</code>，React Native会自动<code>link</code>。但是iOS端还是需要手动安装；进入ios文件夹，然后运行命令：<code>pod install</code>(前提是已经安装了<a href="https://cocoapods.org/" target="_blank" rel="noopener noreferrer">cocoapods</a>环境)</p></div><p>在web浏览器中，您可以使用锚(<code>&lt;a&gt;</code>)标记链接到不同的页面。当用户单击链接时，URL会被推送到浏览器历史堆栈中。当用户按下后退按钮时，浏览器将从历史堆栈顶部弹出该项，因此活动页面现在就是以前访问过的页面。React Native不像web浏览器那样有一个内置的api；React Navigation的堆栈导航器就提供了一种方式来在也，看之间转换和管理导航历史。如果你的应用程序只使用一个堆栈导航器，那么它在概念上类似于web浏览器处理导航状态的方式——当用户与应用程序交互时，你的应用程序从导航堆栈中推入和弹出项目，这导致用户看到不同的视图内容。这在网页浏览器和React Navigation中工作的一个关键区别是，React Navigation的堆栈导航器提供了手势和动画，你可以在Android和iOS上导航堆栈中的路由。</p><blockquote><p>安装堆栈式导航组件 <a href="https://reactnavigation.org/docs/hello-react-navigation" target="_blank" rel="noopener noreferrer">@react-navigation/stack</a></p></blockquote><div class="language-shell"><pre><code>$ <span class="token function">yarn</span> <span class="token function">add</span> @react-navigation/stack\n</code></pre></div><h2 id="实现tab界面切换、界面间导航"><a class="header-anchor" href="#实现tab界面切换、界面间导航" aria-hidden="true">#</a> 实现Tab界面切换、界面间导航</h2><p>API定义：StackNavigator(RouteConfigs, StackNavigatorConfig)、TabNavigator(RouteConfigs, TabNavigatorConfig)</p><ul><li><p>安装依赖：</p><div class="language-shell"><pre><code>$ <span class="token function">yarn</span> <span class="token function">add</span> @react-navigation/bottom-tabs\n</code></pre></div></li><li><p>创建Tab</p><div class="language-tsx"><pre><code><span class="token comment">// tab按钮的参数列表</span>\n<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">BottomTabParamList</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    Home<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n    List<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n    Found<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n    Me<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Tab中包含 Navigator 和 Screen</span>\n<span class="token keyword">const</span> Tab <span class="token operator">=</span> <span class="token generic-function"><span class="token function">createBottomTabNavigator</span><span class="token generic class-name"><span class="token operator">&lt;</span>BottomTabParamList<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></li><li><p>引入组件，编写路由配置</p></li></ul><div class="language-tsx"><pre><code><span class="token comment">// ....</span>\n<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;../pages/home/Home&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> List <span class="token keyword">from</span> <span class="token string">&#39;../pages/list/List&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Found <span class="token keyword">from</span> <span class="token string">&#39;../pages/found/Found&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Me <span class="token keyword">from</span> <span class="token string">&#39;../pages/me/Me&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ...</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tab.Navigator</span></span>\n    <span class="token attr-name">tabBarOptions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n      activeTintColor<span class="token operator">:</span> <span class="token string">&#39;#f86442&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 修改tabbar激活颜色</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tab.Screen</span></span>\n        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Home<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span>\n        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> tabBarLabel<span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tab.Screen</span></span>\n        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>List<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>List<span class="token punctuation">}</span></span>\n        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> tabBarLabel<span class="token operator">:</span> <span class="token string">&#39;榜单&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tab.Screen</span></span>\n        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Found<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Found<span class="token punctuation">}</span></span>\n        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> tabBarLabel<span class="token operator">:</span> <span class="token string">&#39;发现&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tab.Screen</span></span>\n        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Me<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Me<span class="token punctuation">}</span></span>\n        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> tabBarLabel<span class="token operator">:</span> <span class="token string">&#39;我的&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tab.Navigator</span></span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">// ...</span>\n</code></pre></div><blockquote><p>正常情况下，页面底部就会出现四个tab按钮了，可以切换到对应的页面；但是切换后发现顶部的title都是“首页”，没有改变，接下来就实现顶部的title切换；</p></blockquote><div class="language-typescript"><pre><code><span class="token comment">// route的类型</span>\n<span class="token keyword">type</span> <span class="token class-name">Route</span> <span class="token operator">=</span> RouteProp<span class="token operator">&lt;</span>RootStackParamList<span class="token punctuation">,</span> <span class="token string">&#39;BottomTabs&#39;</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>\n    state<span class="token operator">?</span><span class="token operator">:</span> TabNavigationState<span class="token operator">&lt;</span>BottomTabParamList<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 定义组件的属性类型</span>\n<span class="token keyword">interface</span> <span class="token class-name">IProps</span> <span class="token punctuation">{</span>\n    navigation<span class="token operator">:</span> RootStackNavigation<span class="token punctuation">;</span>\n    route<span class="token operator">:</span> Route<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 获取每个页面的标题</span>\n<span class="token function">getHeaderTitle</span><span class="token punctuation">(</span>route<span class="token operator">:</span> Route<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n  \t<span class="token comment">// 传入当前页面的路由，获取路由的名称；如果没有就默认 Home</span>\n    <span class="token keyword">const</span> routeName <span class="token operator">=</span> <span class="token function">getFocusedRouteNameFromRoute</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">switch</span> <span class="token punctuation">(</span>routeName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">case</span> <span class="token string">&#39;Home&#39;</span><span class="token operator">:</span>\n        \t\t<span class="token keyword">return</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">;</span>\n        <span class="token keyword">case</span> <span class="token string">&#39;List&#39;</span><span class="token operator">:</span>\n        \t\t<span class="token keyword">return</span> <span class="token string">&#39;榜单&#39;</span><span class="token punctuation">;</span>\n        <span class="token keyword">case</span> <span class="token string">&#39;Found&#39;</span><span class="token operator">:</span>\n        \t\t<span class="token keyword">return</span> <span class="token string">&#39;发现&#39;</span><span class="token punctuation">;</span>\n        <span class="token keyword">case</span> <span class="token string">&#39;Me&#39;</span><span class="token operator">:</span>\n        \t\t<span class="token keyword">return</span> <span class="token string">&#39;我的&#39;</span><span class="token punctuation">;</span>\n        <span class="token keyword">default</span><span class="token operator">:</span>\n        \t\t<span class="token keyword">return</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> navigation<span class="token punctuation">,</span> route <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n    navigation<span class="token punctuation">.</span><span class="token function">setOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      \theaderTitle<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getHeaderTitle</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><blockquote><p>这样就完整的实现了头部title切换，完整代码如下：</p></blockquote><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createBottomTabNavigator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@react-navigation/bottom-tabs&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n   getFocusedRouteNameFromRoute<span class="token punctuation">,</span>\n   RouteProp<span class="token punctuation">,</span>\n   TabNavigationState<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@react-navigation/native&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> RootStackNavigation<span class="token punctuation">,</span> RootStackParamList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./index&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;../pages/home/Home&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> List <span class="token keyword">from</span> <span class="token string">&#39;../pages/list/List&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Found <span class="token keyword">from</span> <span class="token string">&#39;../pages/found/Found&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Me <span class="token keyword">from</span> <span class="token string">&#39;../pages/me/Me&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">BottomTabParamList</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n     Home<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n     List<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n     Found<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n     Me<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Tab <span class="token operator">=</span> <span class="token generic-function"><span class="token function">createBottomTabNavigator</span><span class="token generic class-name"><span class="token operator">&lt;</span>BottomTabParamList<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">type</span> <span class="token class-name">Route</span> <span class="token operator">=</span> RouteProp<span class="token operator">&lt;</span>RootStackParamList<span class="token punctuation">,</span> <span class="token string">&#39;BottomTabs&#39;</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>\n \t\tstate<span class="token operator">?</span><span class="token operator">:</span> TabNavigationState<span class="token operator">&lt;</span>BottomTabParamList<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">IProps</span> <span class="token punctuation">{</span>\n   navigation<span class="token operator">:</span> RootStackNavigation<span class="token punctuation">;</span>\n   route<span class="token operator">:</span> Route<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">BottomTabs</span> <span class="token keyword">extends</span> <span class="token class-name">Component<span class="token operator">&lt;</span>IProps<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>\n <span class="token comment">// 获取每个页面的标题</span>\n <span class="token function">getHeaderTitle</span><span class="token punctuation">(</span>route<span class="token operator">:</span> Route<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n     <span class="token keyword">const</span> routeName <span class="token operator">=</span> <span class="token function">getFocusedRouteNameFromRoute</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">;</span>\n\n     <span class="token keyword">switch</span> <span class="token punctuation">(</span>routeName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token keyword">case</span> <span class="token string">&#39;Home&#39;</span><span class="token operator">:</span>\n             <span class="token keyword">return</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">;</span>\n         <span class="token keyword">case</span> <span class="token string">&#39;List&#39;</span><span class="token operator">:</span>\n             <span class="token keyword">return</span> <span class="token string">&#39;榜单&#39;</span><span class="token punctuation">;</span>\n         <span class="token keyword">case</span> <span class="token string">&#39;Found&#39;</span><span class="token operator">:</span>\n             <span class="token keyword">return</span> <span class="token string">&#39;发现&#39;</span><span class="token punctuation">;</span>\n         <span class="token keyword">case</span> <span class="token string">&#39;Me&#39;</span><span class="token operator">:</span>\n             <span class="token keyword">return</span> <span class="token string">&#39;我的&#39;</span><span class="token punctuation">;</span>\n         <span class="token keyword">default</span><span class="token operator">:</span>\n             <span class="token keyword">return</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">;</span>\n     <span class="token punctuation">}</span>\n <span class="token punctuation">}</span>\n\n <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token keyword">const</span> <span class="token punctuation">{</span> navigation<span class="token punctuation">,</span> route <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n     navigation<span class="token punctuation">.</span><span class="token function">setOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n         headerTitle<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getHeaderTitle</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">,</span>\n     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token keyword">return</span> <span class="token punctuation">(</span>\n         <span class="token operator">&lt;</span>Tab<span class="token punctuation">.</span>Navigator\n             tabBarOptions<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n                 activeTintColor<span class="token operator">:</span> <span class="token string">&#39;#f86442&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 修改tabbar激活颜色</span>\n             <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\n             <span class="token operator">&lt;</span>Tab<span class="token punctuation">.</span>Screen\n                 name<span class="token operator">=</span><span class="token string">&quot;Home&quot;</span>\n                 component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span>\n                 options<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> tabBarLabel<span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n             <span class="token operator">/</span><span class="token operator">&gt;</span>\n             <span class="token operator">&lt;</span>Tab<span class="token punctuation">.</span>Screen\n                 name<span class="token operator">=</span><span class="token string">&quot;List&quot;</span>\n                 component<span class="token operator">=</span><span class="token punctuation">{</span>List<span class="token punctuation">}</span>\n                 options<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> tabBarLabel<span class="token operator">:</span> <span class="token string">&#39;榜单&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n             <span class="token operator">/</span><span class="token operator">&gt;</span>\n             <span class="token operator">&lt;</span>Tab<span class="token punctuation">.</span>Screen\n                 name<span class="token operator">=</span><span class="token string">&quot;Found&quot;</span>\n                 component<span class="token operator">=</span><span class="token punctuation">{</span>Found<span class="token punctuation">}</span>\n                 options<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> tabBarLabel<span class="token operator">:</span> <span class="token string">&#39;发现&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n             <span class="token operator">/</span><span class="token operator">&gt;</span>\n             <span class="token operator">&lt;</span>Tab<span class="token punctuation">.</span>Screen\n                 name<span class="token operator">=</span><span class="token string">&quot;Me&quot;</span>\n                 component<span class="token operator">=</span><span class="token punctuation">{</span>Me<span class="token punctuation">}</span>\n                 options<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> tabBarLabel<span class="token operator">:</span> <span class="token string">&#39;我的&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n             <span class="token operator">/</span><span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Tab<span class="token punctuation">.</span>Navigator<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \t\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>StackNavigator还提供了onNavigationStateChange回调方法，用来监听导航状态的改变。实现了界面跳转和切换，那么就该来增加下界面之间的感情了，来看看如何实现界面之间的传值和取值。</p></div><h2 id="界面间跳转、传值、取值"><a class="header-anchor" href="#界面间跳转、传值、取值" aria-hidden="true">#</a> 界面间跳转、传值、取值</h2><p>在界面组件注入到<code>StackNavigator</code>中时，界面组件就被赋予了<code>navigation</code>属性，即在界面组件中可以通过<code>this.props.navigation</code> 获取并进行一些操作。</p><p><code>navigation</code>属性中提供了很多的函数简化界面间操作，简单列举几点：</p><ul><li><p>通过navigate函数实现界面之间跳转：</p><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> navigation <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\nnavigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&#39;Detail&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 跳转到详情页</span>\n</code></pre></div><blockquote><p>参数为我们在StackNavigator注册界面组件时的名称。同样也可以从当前页面返回到上一页：</p></blockquote><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> navigation <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\nnavigation<span class="token punctuation">.</span><span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回上一页</span>\n</code></pre></div></li><li><p>跳转时传值：</p><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> navigation <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\nnavigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&#39;Detail&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> topId<span class="token operator">:</span> <span class="token string">&#39;see3x5dfw6&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 路由传参</span>\n</code></pre></div><blockquote><p>第一个参数同样为要跳转的界面组件名称，第二个参数为要传递的参数，info可以理解为key，后面即传递的参数。</p></blockquote></li><li><p>获取路由参数：</p><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> topId <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>route<span class="token punctuation">.</span>params<span class="token punctuation">;</span> <span class="token comment">// 获取topId</span>\n</code></pre></div><blockquote><p>通过route.params来获取传来的参数，后面为key值。此处为info。</p></blockquote></li></ul>',40);p.render=function(s,t,p,e,c,l){return n(),a("div",null,[o])};export default p;export{t as __pageData};

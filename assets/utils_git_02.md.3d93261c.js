import{o as l,c as e,d as a,e as n}from"./app.9bd70d00.js";const s='{"title":"git的常见使用场景","description":"","frontmatter":{},"headers":[{"level":2,"title":"删除不必要的分支","slug":"删除不必要的分支"},{"level":2,"title":"修改commit的描述","slug":"修改commit的描述"},{"level":2,"title":"怎么把连续的多个commit整理成1个","slug":"怎么把连续的多个commit整理成1个"},{"level":2,"title":"怎么把间隔的几个commit整理成一个","slug":"怎么把间隔的几个commit整理成一个"},{"level":2,"title":"比较暂存区和HEAD所含文件的差异","slug":"比较暂存区和head所含文件的差异"},{"level":2,"title":"比较工作区和暂存区所含文件的差异","slug":"比较工作区和暂存区所含文件的差异"},{"level":2,"title":"如何让暂存区恢复成HEAD的一样？","slug":"如何让暂存区恢复成head的一样？"},{"level":2,"title":"如何让工作区的文件恢复和暂存区的一样？","slug":"如何让工作区的文件恢复和暂存区的一样？"},{"level":2,"title":"怎么取消暂存区的部分文件的更改","slug":"怎么取消暂存区的部分文件的更改"},{"level":2,"title":"消除最近几次提交","slug":"消除最近几次提交"},{"level":2,"title":"查看不同提交的指定文件的差异","slug":"查看不同提交的指定文件的差异"},{"level":2,"title":"删除工作区和暂存区的指定文件","slug":"删除工作区和暂存区的指定文件"},{"level":2,"title":"开发过程中，若临时加了任务，既要保存当前的开发内容，又要处理临时任务，该如何操作？","slug":"开发过程中，若临时加了任务，既要保存当前的开发内容，又要处理临时任务，该如何操作？"},{"level":2,"title":"如何处理不需要git管理的文件","slug":"如何处理不需要git管理的文件"},{"level":2,"title":"如何fork别人的项目，及同步项目","slug":"如何fork别人的项目，及同步项目"}],"relativePath":"utils/git/02.md","lastUpdated":1627979812552}',c={},t=a("h1",{id:"git的常见使用场景"},[a("a",{class:"header-anchor",href:"#git的常见使用场景","aria-hidden":"true"},"#"),n(" git的常见使用场景")],-1),i=a("h2",{id:"删除不必要的分支"},[a("a",{class:"header-anchor",href:"#删除不必要的分支","aria-hidden":"true"},"#"),n(" 删除不必要的分支")],-1),o=a("div",{class:"language-shell"},[a("pre",null,[a("code",null,[n("$ "),a("span",{class:"token function"},"git"),n(" branch -d "),a("span",{class:"token operator"},"<"),n("分支名"),a("span",{class:"token operator"},">"),n("    // "),a("span",{class:"token function"},"git"),n(" branch -d develop\n")])])],-1),u=a("p",null,[n("分支在没有合并时且要删除可用"),a("code",null,"git branch -D 分支名")],-1),d=a("h2",{id:"修改commit的描述"},[a("a",{class:"header-anchor",href:"#修改commit的描述","aria-hidden":"true"},"#"),n(" 修改commit的描述")],-1),p=a("ul",null,[a("li",null,"修改最近一次的提交描述")],-1),r=a("div",{class:"language-shell"},[a("pre",null,[a("code",null,[n("$ "),a("span",{class:"token function"},"git"),n(" commit --amend\n")])])],-1),g=a("p",null,[n("输入命令后会终端会可交互式界面(vi/vm界面)，但此时还不能输入，必须按键盘"),a("code",null,"i"),n("才可以输入，修改完成按"),a("code",null,"ESC"),n("然后按"),a("code",null,":wq"),n("保存并退出，此时可以使用"),a("code",null,"git log"),n("查看刚修改的commit描述信息")],-1),f=a("p",null,[n("实践一下：将"),a("code",null,"first commit"),n("改为中文“第一次提交”")],-1),m=a("p",null,[a("img",{src:"/docs/assets/1616023586820-b79f5380-66b0-4e5f-9861-53e45173c373.7fcc9e6b.png",alt:"img"})],-1),b=a("p",null,[n("在终端中输入"),a("code",null,"git commit --amend"),n("回车后，便出现如下图所示")],-1),h=a("p",null,[a("img",{src:"/docs/assets/1616023763483-8324fb70-d0da-45a3-a3aa-986cbe726834.00472323.png",alt:"img"})],-1),k=a("p",null,[n("输入键盘上"),a("code",null,"i"),n("键，输入后便会出现如下图中的标识，左上角的光标由键盘的上下左右键来控制，修改完成后，按键盘上"),a("code",null,"ESC"),n("，然后再按"),a("code",null,":wq"),n("保存并退出")],-1),H=a("p",null,[a("img",{src:"/docs/assets/1616023970104-a580d4a0-5f23-4119-8399-d43b79008524.7dadab1b.png",alt:"img"})],-1),v=a("p",null,[n("此时再使用命令"),a("code",null,"git log"),n("或者"),a("code",null,"git reflog"),n("进行查看，如下图")],-1),A=a("p",null,[a("img",{src:"/docs/assets/1616024150303-64900527-af74-4b6d-a0b6-60243032fd80.d3daf026.png",alt:"img"})],-1),P=a("ul",null,[a("li",null,"修改历史提交的描述")],-1),w=a("div",{class:"language-shell"},[a("pre",null,[a("code",null,[n("$ "),a("span",{class:"token function"},"git"),n(" rebase -i "),a("span",{class:"token operator"},"<"),n("被修改提交的上一次提交的哈希id"),a("span",{class:"token operator"},">"),n("\n")])])],-1),x=a("p",null,"修改下图红色框中的描述信息",-1),j=a("p",null,[a("img",{src:"/docs/assets/1616024815157-5e2ba3bd-1658-4dde-90aa-b0c36a96e70a.15501dd8.png",alt:"img"})],-1),E=a("p",null,"实操一下就是：",-1),D=a("div",{class:"language-shell"},[a("pre",null,[a("code",null,[n("$ "),a("span",{class:"token function"},"git"),n(" rebase -i 1e774773a5da8e87ed18617813f0443c662b759c\n")])])],-1),z=a("p",null,[a("img",{src:"/docs/assets/1616025358999-c935948e-2ab0-48c5-8b04-b18db65e5c6d.489bac68.png",alt:"img"})],-1),N=a("p",null,"输入命令执行相关操作",-1),X=a("p",null,[n("将要修改的commit前面的交互命令改为我们要执行的 "),a("code",null,"r"),n("，")],-1),O=a("p",null,[n("r：就是下面"),a("code",null,"Commands"),n("中的"),a("code",null,"r, reword = use commit, but edit the commit message")],-1),B=a("p",null,[a("img",{src:"/docs/assets/1616025557008-af0e502a-ec57-42f6-ad85-b96eafccdd0f.009b8b4a.png",alt:"img"})],-1),L=a("p",null,[n("修改后，按"),a("code",null,"ESC"),n("，然后在按"),a("code",null,":wq"),n("保存并退出")],-1),T=a("p",null,[a("img",{src:"/docs/assets/1616025848141-9c731e8c-63bd-4fad-ab5b-9470ed154f41.7e9ed69c.png",alt:"img"})],-1),y=a("p",null,[n("回车后终端就会进入和上面修改最近一次提交描述一样的交互式终端(如下图)"),a("img",{src:"/docs/assets/1616026020102-dbf5053b-8f31-47a4-9b70-4aefe740baf8.a6aa66ff.png",alt:"img"})],-1),Q=a("p",null,[n("修改完成后"),a("code",null,"ESC"),n("，"),a("code",null,":wq"),n("保存并退出，然后查看就大功告成啦")],-1),Y=a("p",null,[a("img",{src:"/docs/assets/1616026188557-dff084e3-3981-4c32-8375-f90fbf10826c.bfae76de.png",alt:"img"})],-1),F=a("h2",{id:"怎么把连续的多个commit整理成1个"},[a("a",{class:"header-anchor",href:"#怎么把连续的多个commit整理成1个","aria-hidden":"true"},"#"),n(" 怎么把连续的多个commit整理成1个")],-1),G=a("p",null,"我要将下图红色框中的4次提交合并为一个commit",-1),K=a("p",null,[a("img",{src:"/docs/assets/1616195984007-a0d0ac82-2c88-4896-bca7-70b2860f7ec8.3bb59d9c.png",alt:"img"})],-1),q=a("p",null,[n("要将红色框中的四次提交合并为一个commit，就得使用到和上一个修改一样的方法"),a("code",null,"git rebase -i <哈希id>"),n(" 这儿的哈希id和上一个问题的一样，都是被修改提交的上一次提交的哈希id，这儿便是"),a("code",null,"d159f0aee610b8d5f8d376217c1811de9b42241d"),n("(也就是截图中的最后一个commit的哈希id)")],-1),C=a("p",null,"在终端中输入如下命令执行",-1),M=a("div",{class:"language-shell"},[a("pre",null,[a("code",null,[n("$ "),a("span",{class:"token function"},"git"),n(" rebase -i d159f0aee610b8d5f8d376217c1811de9b42241d\n")])])],-1),V=a("p",null,"执行命令后会进入一下界面",-1),W=a("p",null,[a("img",{src:"/docs/assets/1616196143018-c490709f-0e1e-488b-98e2-4718fa449628.0fe26934.png",alt:"img"})],-1),I=a("p",null,[n("按键盘"),a("code",null,"i"),n("键，进入可交互式输入模式，将所要修改的提交前的标识改为squash(也就是commands中的s)；如下图输入完成之后，按"),a("code",null,"ESC"),n("退出，然后按"),a("code",null,":wq"),n("保存，回车")],-1),J=a("p",null,[a("img",{src:"/docs/assets/1616196500721-11d103c6-dd34-4954-bc61-13a5890713c9.88f574a4.png",alt:"img"})],-1),R=a("p",null,"回车后就会出现如下界面",-1),U=a("p",null,[a("img",{src:"/docs/assets/1616196626525-9bf27f1b-d2cf-413d-b54f-83deeb0d402d.bd84f955.png",alt:"img"})],-1),Z=a("p",null,[n("然后在第一行写本次修改的描述，然后"),a("code",null,"ESC"),n("退出，"),a("code",null,":wq"),n("退出交互式终端并保存")],-1),S=a("p",null,[a("img",{src:"/docs/assets/1616196792673-cbfb7ced-0fff-45c1-aace-0140ef3b2842.d5921ce7.png",alt:"img"})],-1),$=a("p",null,[n("查看刚修改的："),a("code",null,"git log")],-1),_=a("p",null,[a("img",{src:"/docs/assets/1616196917899-2320c3e4-f5c5-4bae-b42d-c2b63cd44fe7.f1e872e2.png",alt:"img"})],-1),ll=a("h2",{id:"怎么把间隔的几个commit整理成一个"},[a("a",{class:"header-anchor",href:"#怎么把间隔的几个commit整理成一个","aria-hidden":"true"},"#"),n(" 怎么把间隔的几个commit整理成一个")],-1),el=a("p",null,"将红色框中的两次此提交合并为一次",-1),al=a("p",null,[a("img",{src:"/docs/assets/1616197790419-8eb01b5b-1a46-4f07-a095-bc419dc4a1c7.89d9453f.png",alt:"img"})],-1),nl=a("div",{class:"language-shell"},[a("pre",null,[a("code",null,[n("$ "),a("span",{class:"token function"},"git"),n(" rebase -i 1e774773\n")])])],-1),sl=a("p",null,[n("将要合并的分支排在一起，并将其标识改为"),a("code",null,"s"),n("；如下图：")],-1),cl=a("p",null,[a("img",{src:"/docs/assets/1616198138161-e03a4625-9a31-4a32-b80b-a6f053eaf4cd.e75f54c4.png",alt:"img"})],-1),tl=a("p",null,"查看修改后的结果：",-1),il=a("p",null,[a("img",{src:"/docs/assets/1616198590270-1db31d85-36c4-44f5-b155-9f58eb7abe5e.f0ac501e.png",alt:"img"})],-1),ol=a("h2",{id:"比较暂存区和head所含文件的差异"},[a("a",{class:"header-anchor",href:"#比较暂存区和head所含文件的差异","aria-hidden":"true"},"#"),n(" 比较暂存区和HEAD所含文件的差异")],-1),ul=a("p",null,"在utils.js文件中添加了一个sum函数，加入（git add .）暂存区后使用命令来比较",-1),dl=a("p",null,[a("img",{src:"/docs/assets/1616973921984-83314380-bf44-4737-8dfb-537a74c324a9.1fd412d7.png",alt:"img"})],-1),pl=a("p",null,"对比当前暂存去与上一次提交的内容变更：命令（git diff --cached）;此时还没有提交，所以修改后在add也不会生成commit记录",-1),rl=a("p",null,[a("img",{src:"/docs/assets/1616974006430-5471bcc1-c0c0-4119-8aee-00136ac6413f.d2f0cb25.png",alt:"img"})],-1),gl=a("h2",{id:"比较工作区和暂存区所含文件的差异"},[a("a",{class:"header-anchor",href:"#比较工作区和暂存区所含文件的差异","aria-hidden":"true"},"#"),n(" 比较工作区和暂存区所含文件的差异")],-1),fl=a("p",null,[n("在mian.js中添加如下代码后直接"),a("code",null,"git diff"),n(" 进行对比")],-1),ml=a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"import"),n(" Koa "),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'koa'"),n("\n\n"),a("span",{class:"token keyword"},"const"),n(" app "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token keyword"},"new"),n(),a("span",{class:"token class-name"},"Koa"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n("\n\n"),a("span",{class:"token keyword"},"const"),n(" port "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token number"},"3000"),a("span",{class:"token punctuation"},";"),n("\napp"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"listen"),a("span",{class:"token punctuation"},"("),n("port"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(" console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token template-string"},[a("span",{class:"token template-punctuation string"},"`"),a("span",{class:"token interpolation"},[a("span",{class:"token interpolation-punctuation punctuation"},"${"),n("port"),a("span",{class:"token interpolation-punctuation punctuation"},"}")]),a("span",{class:"token template-punctuation string"},"`")]),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),n("\n")])])],-1),bl=a("p",null,[a("img",{src:"/docs/assets/1616974494944-c4a8dd4e-a693-4897-9255-24041f6f79ba.a7c83f2a.png",alt:"img"})],-1),hl=a("p",null,"Tips:",-1),kl=a("ul",null,[a("li",null,[n("如果对所有的文件进行对比的话就直接"),a("code",null,"git diff")]),a("li",null,[n("如果对单个（或者多个）文件进行对比的话，可以diff后面添加一个（或者多个）文件名，命令："),a("code",null,"git diff -- <文件名>")])],-1),Hl=a("p",null,[a("img",{src:"/docs/assets/1616974847844-34d041e4-7052-4046-aa8f-205d4f99320e.18e1788a.png",alt:"img"})],-1),vl=a("h2",{id:"如何让暂存区恢复成head的一样？"},[a("a",{class:"header-anchor",href:"#如何让暂存区恢复成head的一样？","aria-hidden":"true"},"#"),n(" 如何让暂存区恢复成HEAD的一样？")],-1),Al=a("p",null,"查看暂存区的变更内容如下",-1),Pl=a("p",null,[a("img",{src:"/docs/assets/1616975115735-b616c762-8ddd-41a4-9309-3ad25a247a39.30ba9a71.png",alt:"img"})],-1),wl=a("p",null,[n("若要变更到与变更之前的那个版本可以使用"),a("code",null,"git reset HEAD"),n("命令，如果单个文件要变更到变更之前的那个版本则可以在HEAD后面添加文件名"),a("code",null,"git reset HEAD <文件名>")],-1),xl=a("p",null,[a("img",{src:"/docs/assets/1616975401417-6b5719f7-b368-48ef-8e81-4a72045d75e1.2d79ccbc.png",alt:"img"})],-1),jl=a("h2",{id:"如何让工作区的文件恢复和暂存区的一样？"},[a("a",{class:"header-anchor",href:"#如何让工作区的文件恢复和暂存区的一样？","aria-hidden":"true"},"#"),n(" 如何让工作区的文件恢复和暂存区的一样？")],-1),El=a("p",null,"将上一个问题reset的文件重新提交到暂存区并作比较",-1),Dl=a("p",null,[a("img",{src:"/docs/assets/1616975639574-7857ea59-f8f4-48d5-b1f9-c7605c76bb56.0279bb11.png",alt:"img"})],-1),zl=a("p",null,[n("现在我会在"),a("code",null,"app.listen(port, ()=> console.log("),n("${port}"),a("code",null,"))"),n("后面添加中文标识")],-1),Nl=a("p",null,[a("img",{src:"/docs/assets/1616976166169-7e63e9bb-d0b8-4a8f-a799-a3f96f7e86e7.f0851d48.png",alt:"img"})],-1),Xl=a("p",null,"现在不想要中文标识的那次修改了，该怎么恢复呢？",-1),Ol=a("p",null,[a("img",{src:"/docs/assets/1616976298960-2e89a369-6d23-42b7-81a8-3151d5eafb3d.af0d7c29.png",alt:"img"})],-1),Bl=a("h2",{id:"怎么取消暂存区的部分文件的更改"},[a("a",{class:"header-anchor",href:"#怎么取消暂存区的部分文件的更改","aria-hidden":"true"},"#"),n(" 怎么取消暂存区的部分文件的更改")],-1),Ll=a("p",null,"现在暂存区中有三个文件已经被修改，若要丢弃utils.js文件的修改，应如何操作？",-1),Tl=a("p",null,[a("img",{src:"/docs/assets/1617059401807-867ae4ff-6a37-44f1-87a8-b47d20c31383.6357fae8.png",alt:"img"})],-1),yl=a("p",null,[n("回复一个或多个文件使用命令："),a("code",null,"git reset HEAD -- <文件名> <文件名>")],-1),Ql=a("p",null,"命令执行之后，查看暂存区的记录如下图：",-1),Yl=a("p",null,[a("img",{src:"/docs/assets/1617059688590-26aefa71-49a7-487f-b20c-51ca4e50b82c.cfb449e5.png",alt:"img"})],-1),Fl=a("h2",{id:"消除最近几次提交"},[a("a",{class:"header-anchor",href:"#消除最近几次提交","aria-hidden":"true"},"#"),n(" 消除最近几次提交")],-1),Gl=a("p",null,"如下图，若要回到‘合并配置的那次提交’应如何操作？",-1),Kl=a("p",null,[a("img",{src:"/docs/assets/1617059989269-9806f4d3-8baa-45ca-b1c7-3f203236c8d7.e13eb0d0.png",alt:"img"})],-1),ql=a("p",null,[n("可以使用一非常危险的命令："),a("code",null,"git reset --hard <id>")],-1),Cl=a("p",null,[a("img",{src:"/docs/assets/1617060200880-aa8f69a2-7553-4473-bc48-58df3e94119b.cad66223.png",alt:"img"})],-1),Ml=a("p",null,"gitk 命令查看提交历史树：",-1),Vl=a("p",null,[a("img",{src:"/docs/assets/1617060289180-2becd2c2-9848-43c5-b44a-32ee7bdeac32.ffce2f03.png",alt:"img"})],-1),Wl=a("h2",{id:"查看不同提交的指定文件的差异"},[a("a",{class:"header-anchor",href:"#查看不同提交的指定文件的差异","aria-hidden":"true"},"#"),n(" 查看不同提交的指定文件的差异")],-1),Il=a("p",null,[n("命令："),a("code",null,"git diff <分支名> <分支名> -- <文件名>"),n("；后面的文件名若不写，则是对比两个分支的所有内容差异")],-1),Jl=a("h2",{id:"删除工作区和暂存区的指定文件"},[a("a",{class:"header-anchor",href:"#删除工作区和暂存区的指定文件","aria-hidden":"true"},"#"),n(" 删除工作区和暂存区的指定文件")],-1),Rl=a("div",{class:"language-shell"},[a("pre",null,[a("code",null,[n("$ "),a("span",{class:"token function"},"git"),n(),a("span",{class:"token function"},"rm"),n(),a("span",{class:"token operator"},"<"),n("文件名"),a("span",{class:"token operator"},">"),n("\n")])])],-1),Ul=a("p",null,[a("img",{src:"/docs/assets/1617061275939-66aa92cc-4c49-4919-84fb-a09d6e9265b5.3ef8e7d8.png",alt:"img"})],-1),Zl=a("h2",{id:"开发过程中，若临时加了任务，既要保存当前的开发内容，又要处理临时任务，该如何操作？"},[a("a",{class:"header-anchor",href:"#开发过程中，若临时加了任务，既要保存当前的开发内容，又要处理临时任务，该如何操作？","aria-hidden":"true"},"#"),n(" 开发过程中，若临时加了任务，既要保存当前的开发内容，又要处理临时任务，该如何操作？")],-1),Sl=a("div",{class:"language-shell"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"# 1、先将工作区的内容暂存起来"),n("\n$ "),a("span",{class:"token function"},"git"),n(" stash\n\n"),a("span",{class:"token comment"},"# 2、临时任务处理完成之后，在恢复暂存的内容"),n("\n$ "),a("span",{class:"token function"},"git"),n(" stash apply/pop // 作用：a.恢复之前保存的东西到工作区 b.apply不会清除暂存区的记录，pop会清除\n")])])],-1),$l=a("h2",{id:"如何处理不需要git管理的文件"},[a("a",{class:"header-anchor",href:"#如何处理不需要git管理的文件","aria-hidden":"true"},"#"),n(" 如何处理不需要git管理的文件")],-1),_l=a("p",null,"添加与.git同级.gitignore文件",-1),le=a("ul",null,[a("li",null,"将不需要git管理的文件或者文件夹名添加进.gitignore文件中")],-1),ee=a("h2",{id:"如何fork别人的项目，及同步项目"},[a("a",{class:"header-anchor",href:"#如何fork别人的项目，及同步项目","aria-hidden":"true"},"#"),n(" 如何fork别人的项目，及同步项目")],-1),ae=a("p",null,"其实fork很简单，进入项目后，菜单栏的右上角有一个有一个fork的按钮，点击之后就会出来一个选择项，会问你保存在哪里，选择自己对应的保存路径就好了，如下图",-1),ne=a("p",null,[a("img",{src:"/docs/assets/1618790995270-8e3e6d15-0d16-4a3b-858d-068c9f397398.2abb7834.png",alt:"img"})],-1),se=a("p",null,"同步项目：就是项目源码更新之后，我们如去更新自己的代码，可以使用网页端手动更新、也可以使用命令更新，我这里就演示使用命令更新",-1),ce=a("ul",null,[a("li",null,"建立远程源码仓库连接")],-1),te=a("div",{class:"language-shell"},[a("pre",null,[a("code",null,[n("$ "),a("span",{class:"token function"},"git"),n(" remote update "),a("span",{class:"token operator"},"<"),n("项目源码的仓库地址"),a("span",{class:"token operator"},">"),n("\n")])])],-1),ie=a("p",null,[n("示例："),a("img",{src:"data:image/png;base64,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",alt:"img"})],-1),oe=a("ul",null,[a("li",null,"查看是否建立连接成功")],-1),ue=a("div",{class:"language-shell"},[a("pre",null,[a("code",null,[n("$ "),a("span",{class:"token function"},"git"),n(" remote -v\n")])])],-1),de=a("p",null,[a("img",{src:"/docs/assets/1618790429567-6f8cd5a6-f810-4142-8b28-c68ce7bef25d.7fa3f9f0.png",alt:"img"})],-1),pe=a("ul",null,[a("li",null,"fetch命令更新源码")],-1),re=a("div",{class:"language-shell"},[a("pre",null,[a("code",null,[n("$ "),a("span",{class:"token function"},"git"),n(" fetch update\n")])])],-1),ge=a("p",null,"示例：",-1),fe=a("p",null,[a("img",{src:"/docs/assets/1618790490668-7c171423-0333-4fed-bc83-b3cf1f840d18.9900c96f.png",alt:"img"})],-1),me=a("p",null,"Tips:",-1),be=a("p",null,"这儿更新是更新到notes/master分支上的，不是直接更新到master分支，但是我查看分支时，并没有notes/master这个分支，后续在研究研究；既然没有直接更新到主分支上，那就要手动合并分支",-1),he=a("ul",null,[a("li",null,"合并分支")],-1),ke=a("p",null,"切换到主分支在合并",-1),He=a("div",{class:"language-shell"},[a("pre",null,[a("code",null,[n("$ "),a("span",{class:"token function"},"git"),n(" merge "),a("span",{class:"token operator"},"<"),n("待合并分支"),a("span",{class:"token operator"},">"),n("\n")])])],-1),ve=a("p",null,"示例：",-1),Ae=a("p",null,[a("img",{src:"/docs/assets/1618790861982-7648564c-4dd7-4b42-b570-90cb969bb4b1.a587c06d.png",alt:"img"})],-1),Pe=a("p",null,"这样代码就更新了",-1);c.render=function(a,n,s,c,we,xe){return l(),e("div",null,[t,i,o,u,d,p,r,g,f,m,b,h,k,H,v,A,P,w,x,j,E,D,z,N,X,O,B,L,T,y,Q,Y,F,G,K,q,C,M,V,W,I,J,R,U,Z,S,$,_,ll,el,al,nl,sl,cl,tl,il,ol,ul,dl,pl,rl,gl,fl,ml,bl,hl,kl,Hl,vl,Al,Pl,wl,xl,jl,El,Dl,zl,Nl,Xl,Ol,Bl,Ll,Tl,yl,Ql,Yl,Fl,Gl,Kl,ql,Cl,Ml,Vl,Wl,Il,Jl,Rl,Ul,Zl,Sl,$l,_l,le,ee,ae,ne,se,ce,te,ie,oe,ue,de,pe,re,ge,fe,me,be,he,ke,He,ve,Ae,Pe])};export default c;export{s as __pageData};

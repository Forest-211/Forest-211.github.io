import{o as l,c as e,b as n,d as i}from"./app.3d87dfd1.js";const a='{"title":"git的基本配置及常用命令的使用","description":"","frontmatter":{},"headers":[{"level":2,"title":"git可以解决的问题","slug":"git可以解决的问题"},{"level":2,"title":"特点","slug":"特点"},{"level":2,"title":"分布式与集中式的区别","slug":"分布式与集中式的区别"},{"level":2,"title":"官网 git下载","slug":"官网-git下载"},{"level":2,"title":"配置config的三个作用","slug":"配置config的三个作用"},{"level":2,"title":"搭建本地Git仓库","slug":"搭建本地git仓库"},{"level":2,"title":"命令及可视化工具","slug":"命令及可视化工具"},{"level":2,"title":".git目录解密","slug":"git目录解密"},{"level":2,"title":"commit、tree、blob之间的关系","slug":"commit、tree、blob之间的关系"}],"relativePath":"utils/git/01.md","lastUpdated":1626447583296}',t={},c=n("h1",{id:"git的基本配置及常用命令的使用"},[n("a",{class:"header-anchor",href:"#git的基本配置及常用命令的使用","aria-hidden":"true"},"#"),i(" git的基本配置及常用命令的使用")],-1),u=n("blockquote",null,[n("p",null,"Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目;")],-1),s=n("h2",{id:"git可以解决的问题"},[n("a",{class:"header-anchor",href:"#git可以解决的问题","aria-hidden":"true"},"#"),i(" git可以解决的问题")],-1),d=n("ul",null,[n("li",null,"版本控制系统"),n("li",null,"CI/CD集成"),n("li",null,"......")],-1),o=n("h2",{id:"特点"},[n("a",{class:"header-anchor",href:"#特点","aria-hidden":"true"},"#"),i(" 特点")],-1),g=n("ul",null,[n("li",null,"优秀的存储能力"),n("li",null,"非凡的性能"),n("li",null,"开源的"),n("li",null,"很容易做备份"),n("li",null,"支持离线操作"),n("li",null,"很容易制定工作流程"),n("li",null,"分布式版本控制系统")],-1),r=n("h2",{id:"分布式与集中式的区别"},[n("a",{class:"header-anchor",href:"#分布式与集中式的区别","aria-hidden":"true"},"#"),i(" 分布式与集中式的区别")],-1),f=n("p",null,"先说集中式版本控制系统，版本库是集中存放在中央服务器的，而干活的时候，用的都是自己的电脑，所以要先从中央服务器取得最新的版本，然后开始干活，干完活了，再把自己的活推送给中央服务器。中央服务器就好比是一个图书馆，你要改一本书，必须先从图书馆借出来，然后回到家自己改，改完了，再放回图书馆。集中式版本控制系统最大的毛病就是必须联网才能工作，如果在局域网内还好，带宽够大，速度够快，可如果在互联网上，遇到网速慢的话，可能提交一个10M的文件就需要5分钟左右。",-1),m=n("p",null,"那分布式版本控制系统与集中式版本控制系统有何不同呢？首先，分布式版本控制系统根本没有“中央服务器”，每个人的电脑上都是一个完整的版本库，这样，你工作的时候，就不需要联网了，因为版本库就在你自己的电脑上。既然每个人电脑上都有一个完整的版本库，那多个人如何协作呢？比方说你在自己电脑上改了文件A，你的同事也在他的电脑上改了文件A，这时，你们俩之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。",-1),p=n("p",null,"和集中式版本控制系统相比，分布式版本控制系统的安全性要高很多，因为每个人电脑里都有完整的版本库，某一个人的电脑坏掉了不要紧，随便从其他人那里复制一个就可以了。而集中式版本控制系统的中央服务器要是出了问题，所有人都没法干活了。",-1),b=n("h2",{id:"官网-git下载"},[n("a",{class:"header-anchor",href:"#官网-git下载","aria-hidden":"true"},"#"),i(" 官网 "),n("a",{href:"https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git",target:"_blank",rel:"noopener noreferrer"},"git下载")],-1),h=n("p",null,[i("按照文档的流程安装下去，安装成功后，可在桌面鼠标右击（windos）查看（如下左图）或者在命令窗口输入 "),n("code",null,"git --version"),i(" （右图）")],-1),v=n("p",null,[n("img",{src:"/assets/1615206243504-8b7fe5d6-72c8-410c-97f4-ca2ceb4b4fb2.80fb14ec.png",alt:"img"}),i(),n("br"),n("img",{src:"data:image/png;base64,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",alt:"img"})],-1),A=n("h2",{id:"配置config的三个作用"},[n("a",{class:"header-anchor",href:"#配置config的三个作用","aria-hidden":"true"},"#"),i(" 配置config的三个作用")],-1),z=n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[i("$ "),n("span",{class:"token function"},"git"),i(" config --local  \t"),n("span",{class:"token comment"},"# local只对某个仓库有效"),i("\n$ "),n("span",{class:"token function"},"git"),i(" config --global \t"),n("span",{class:"token comment"},"# global对当前用户的所有仓库有效"),i("\n$ "),n("span",{class:"token function"},"git"),i(" config --system \t"),n("span",{class:"token comment"},"# system对系统所有登录的用户有效"),i("\n")])])],-1),G=n("ul",null,[n("li",null,"查看config的配置")],-1),P=n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[i("$ "),n("span",{class:"token function"},"git"),i(" confi g --list --local\n$ "),n("span",{class:"token function"},"git"),i(" config --list --global\n$ "),n("span",{class:"token function"},"git"),i(" confi g--list --system\n")])])],-1),H=n("p",null,[n("img",{src:"/assets/1615206794821-662a7051-344b-4551-9c6b-ccbc6fd40fd7.ba3cec33.png",alt:"img"}),n("img",{src:"/assets/1615206845505-41095e31-7ed3-41b3-9f78-ae25a7462b6b.dd439771.png",alt:"img"})],-1),O=n("h2",{id:"搭建本地git仓库"},[n("a",{class:"header-anchor",href:"#搭建本地git仓库","aria-hidden":"true"},"#"),i(" 搭建本地Git仓库")],-1),X=n("p",null,"两种场景",-1),N=n("ul",null,[n("li",null,"把已有的项目代码纳入Git管理")],-1),j=n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[i("$ "),n("span",{class:"token builtin class-name"},"cd"),i(" 项目代码所在的文件夹\n$ "),n("span",{class:"token function"},"git"),i(" init\n")])])],-1),D=n("ul",null,[n("li",null,"新建的项目直接用Git管理")],-1),w=n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[i("$ "),n("span",{class:"token builtin class-name"},"cd"),i(" 某个文件夹\n$ "),n("span",{class:"token function"},"git"),i(" init your_porject  "),n("span",{class:"token comment"},"#会在当前路径下常见和项目名称同名的文件夹"),i("\n$ "),n("span",{class:"token builtin class-name"},"cd"),i(" your_project\n")])])],-1),Z=n("h2",{id:"命令及可视化工具"},[n("a",{class:"header-anchor",href:"#命令及可视化工具","aria-hidden":"true"},"#"),i(" 命令及可视化工具")],-1),x=n("ul",null,[n("li",null,[n("p",null,[n("code",null,"git add ."),i(" 和"),n("code",null,"git add -u"),i("将当前项目中的所有没有被git跟踪的文件添加暂存区")])]),n("li",null,[n("p",null,[n("code",null,"git add tools"),i(" 将tools文件夹添加到暂存区")])]),n("li",null,[n("p",null,[n("code",null,"git rm ."),i(" 删除暂存区中所有被跟踪的文件")])]),n("li",null,[n("p",null,[n("code",null,"git rm readme.md"),i(" 删除暂存区中readme.md文件")])]),n("li",null,[n("p",null,[n("code",null,"git status"),i(" 查看当前项目中的所有文件状态[暂存区和未添加到暂存区]")])]),n("li",null,[n("p",null,[n("code",null,"git commit -am 'type: message'"),i(" 将当前项目的所有文件添加并提交到暂存区")])]),n("li",null,[n("p",null,[n("code",null,"git commit -m 'type: message'"),i(" 将项目文件提交到暂存区")])]),n("li",null,[n("p",null,"type：必填项，用于说明本次提交做出哪种类型的修改，必须是以下任意一值："),n("ul",null,[n("li",null,[n("p",null,"feat: A new feature（新功能）")]),n("li",null,[n("p",null,"fix: A bug fix（bug的修复）")]),n("li",null,[n("p",null,"docs: Documentation only changes（修改项目中的文档）")]),n("li",null,[n("p",null,"style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)（不影响代码逻辑下的样式修改，通常是风格修改，例如空格、格式、分号方面的修改等）")]),n("li",null,[n("p",null,"refactor: A code change that neither fixes a bug nor adds a feature（重构，不包括修复bug和添加新功能）")]),n("li",null,[n("p",null,"perf: A code change that improves performance（性能优化）")]),n("li",null,[n("p",null,"test: Adding missing or correcting existing tests（添加或者修改测试代码）")]),n("li",null,[n("p",null,"chore: Changes to the build process or auxiliary tools and libraries such as documentation generation（对构建过程或辅助工具和库(如文档生成)的更改）")])])]),n("li",null,[n("p",null,"message：对本次提交的描述")]),n("li",null,[n("p",null,[n("code",null,"git reset --hard"),i(" 撤销上一次的提交，使其上次提交的所有记录都清除掉 [这个命令谨慎操作]")])]),n("li",null,[n("p",null,[n("code",null,"git log"),i(" 查看所有的提交记录")])])],-1),V=n("p",null,[n("img",{src:"/assets/1615213463147-0444fac9-3172-43d4-a432-bfbf2225feef.58d8f15d.png",alt:"img"})],-1),y=n("ul",null,[n("li",null,[n("code",null,"git log --oneline"),i(" 查看所有的提交记录，与"),n("code",null,"git log"),i("区别在于不会提交记录的完整信息，只会展示id和描述")])],-1),q=n("p",null,[n("img",{src:"/assets/1615213517420-e816787d-0775-4d68-a913-d839319c7bbc.c561ed30.png",alt:"img"})],-1),B=n("ul",null,[n("li",null,[n("code",null,"git mv readme readme.md"),i(" 更改文件名")]),n("li",null,[n("code",null,"git log -n4 --oneline"),i(" 查看最近4次提交记录")])],-1),L=n("p",null,[n("img",{src:"/assets/1615213635660-13cf106b-39d0-4939-b543-9de5e72a1a53.5a53a2a8.png",alt:"img"})],-1),T=n("ul",null,[n("li",null,[n("code",null,"git branch -v"),i(" 查看当前项目下的所有分支")])],-1),k=n("p",null,[n("img",{src:"/assets/1615214069518-a994a9ea-17e1-4058-a5cb-1d9f7941934b.07d6bad7.png",alt:"img"})],-1),U=n("ul",null,[n("li",null,[n("code",null,"git checkout -b development"),i(" 新建一个"),n("code",null,"development"),i("分支")]),n("li",null,[n("code",null,"git branch -av"),i(" 查看当前项目的所有分支")])],-1),W=n("p",null,[n("img",{src:"/assets/1615214771198-d3a1b352-9123-4253-a7f7-8a3224c7bef3.49c60d61.png",alt:"img"})],-1),M=n("ul",null,[n("li",null,[n("code",null,"git log --all"),i(" 查看当前项目的所有分支的提交记录（演进历史）")])],-1),R=n("p",null,[n("img",{src:"/assets/1615214749085-f823d173-7152-4be6-9b9a-f7d43b145bfe.3313528d.png",alt:"img"})],-1),Y=n("ul",null,[n("li",null,[n("code",null,"git log --graph"),i(" 以树形列表的形式展示提交记录")])],-1),E=n("p",null,[n("img",{src:"/assets/1615215374236-6584ca11-106b-4eec-907d-1c1b3398ec32.02842b88.png",alt:"img"})],-1),C=n("ul",null,[n("li",null,[n("code",null,"git log --oneline -n7 --all --graph"),i(" 以树形列表的形式展示最近7次所有分支的历史提交记录")])],-1),I=n("p",null,[n("img",{src:"/assets/1615215882417-213029e4-ee09-473b-b77a-4fa72bc8d58d.212f4a1d.png",alt:"img"})],-1),Q=n("ul",null,[n("li",null,[n("code",null,"gitk"),i(" 查看git管理的可视化工具（下图为图形界面）")])],-1),F=n("p",null,[n("img",{src:"/assets/1615245596677-6c56aed9-47a8-4212-8c15-2858c1ce97ea.bc282d2e.png",alt:"img"})],-1),K=n("p",null,"界面板块解析",-1),J=n("p",null,[n("img",{src:"/assets/1615246548595-d154275d-89ad-48f6-ad37-8d3d7157b508.b252ebeb.png",alt:"img"})],-1),S=n("p",null,"此界面还可以自定义视图",-1),$=n("p",null,"步骤为：左上角的view ----\x3enew view(或者直接shift+F4)",-1),_=n("p",null,[n("img",{src:"/assets/1615246724495-3fa03e10-4d20-41a8-b970-9a7f7e07ad3b.6bbb2be3.png",alt:"img"}),n("img",{src:"/assets/1615246945192-f45092e7-d6fd-4762-9d0b-0668c0694733.93a12970.png",alt:"img"})],-1),ll=n("ul",null,[n("li",null,[n("code",null,"git cat-file -t 70f497e2e1651f78c5189a"),i(" 查看哈希id为70f497e2e1651f78c5189a的文件类型")])],-1),el=n("p",null,[n("img",{src:"/assets/1615333003656-fc8d98c1-8388-4561-910d-c1b2c88318c3.329e9588.png",alt:"img"})],-1),nl=n("ul",null,[n("li",null,[n("code",null,"git cat-file -p 70f497e2e1651f78c5189a"),i(" 查看tree哈希id为76b557b6cb8cf2545cff7b21ad4facee7f620a33内的详细变更内容")])],-1),il=n("p",null,[n("img",{src:"/assets/1615333680751-f078c2b2-219b-4d80-8d70-3ea6ee1d61e9.e19346ab.png",alt:"img"})],-1),al=n("ul",null,[n("li",null,[n("code",null,"git checkout -b fixBug 70f497e2e1651f78c51"),i(" 基于哈希id为70f497e2e1651f78c51切换并创建一个fix Bug的分支")])],-1),tl=n("h2",{id:"git目录解密"},[n("a",{class:"header-anchor",href:"#git目录解密","aria-hidden":"true"},"#"),i(" .git目录解密")],-1),cl=n("p",null,"进入.git查看个文件及文件夹",-1),ul=n("p",null,[n("img",{src:"/assets/1615386063889-3373c3cc-07ce-4ff9-8ce4-7043401c930f.dbd4b718.png",alt:"img"})],-1),sl=n("ul",null,[n("li",null,[n("p",null,"HEAD 保存当前分支的记录（指向当前引用的分支）")]),n("li",null,[n("p",null,"config 当前项目的本地仓库的配置信息（包含name、email、远程仓库地址）")]),n("li",null,[n("p",null,"refs 记录当前仓库的标签(里程碑)")])],-1),dl=n("h2",{id:"commit、tree、blob之间的关系"},[n("a",{class:"header-anchor",href:"#commit、tree、blob之间的关系","aria-hidden":"true"},"#"),i(" commit、tree、blob之间的关系")],-1),ol=n("p",null,"一个commit只会对应一个tree，这个tree代表当前commit的快照，这个快照的集合里存在的就是本次提交变更的所有文件及文件夹的快照",-1),gl=n("p",null,"一个tree可能对应多个tree或者blob",-1),rl=n("p",null,"在git中，只要文件的内容完全一致，它就只会存在唯一一个blob",-1);t.render=function(n,i,a,t,fl,ml){return l(),e("div",null,[c,u,s,d,o,g,r,f,m,p,b,h,v,A,z,G,P,H,O,X,N,j,D,w,Z,x,V,y,q,B,L,T,k,U,W,M,R,Y,E,C,I,Q,F,K,J,S,$,_,ll,el,nl,il,al,tl,cl,ul,sl,dl,ol,gl,rl])};export default t;export{a as __pageData};

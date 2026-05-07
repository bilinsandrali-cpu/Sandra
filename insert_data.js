const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

// ===== 1. 插入 3/19 抖音数据（替换 douyin: null） =====
const douyin0319 = `douyin: {
        date: "2026/3/19",
        items: [
          {rank:1, name:"风水天师", account:"时刻热血剧场", affiliate:"时刻互动", episodes:61, type:"AI仿真人剧", newPlay:"1.86亿", totalPlay:"3.27亿", synopsis:"民国奇门传人李乘风继承随缘堂，不顾劝阻悬壶济世。在接手叶家怪病疑案时以葫芦术声名鹊起，后勘破风水困局、揭露阴阳师阴谋，最终布铜钱阵击败九菊一派，守护大夏风水格局。"},
          {rank:2, name:"安居一隅，如月昭昭", account:"柒柒似玖", affiliate:"待确认", episodes:65, type:"AI仿真人剧", newPlay:"5671.0万", totalPlay:"6065.1万", synopsis:"六岁的张昭昭与母亲芸娘被赵家苛待，亲爹赵永安假死卖妻女，二人被卖给满脸刀疤的瘸腿张猎户。本以为坠入深渊，不料这沉默凶悍的男人竟默默守护她们，两人在乱世中相依相守。"},
          {rank:3, name:"逆袭归来，前妻破防了", account:"江山短剧", affiliate:"待确认", episodes:56, type:"AI仿真人剧", newPlay:"5268.7万", totalPlay:"2.18亿", synopsis:"曾经被前妻抛弃的窝囊男人，沉寂数年后携惊人实力强势归来。当他以全新面貌出现在众人面前，前妻追悔莫及，而他早已不再回头。"},
          {rank:4, name:"昭昭如月", account:"枕月绘梦居", affiliate:"待确认", episodes:49, type:"AI仿真人解说漫", newPlay:"5015.8万", totalPlay:"2.52亿", synopsis:"赵招娣与母亲被至亲出卖，嫁给传闻中打死前妻的瘸腿猎户，原是赴死之局。不料这沉默凶悍的男人竟默默守护她，两人在乱世中相依相守。"},
          {rank:5, name:"我给狗子喂黄金", account:"虾鱼儿", affiliate:"待确认", episodes:91, type:"表情包漫", newPlay:"2829.4万", totalPlay:"3077.3万", synopsis:"缺少公开信息"},
          {rank:6, name:"猎户糙汉，独宠小典妻", account:"甜豆日记", affiliate:"待确认", episodes:52, type:"AI仿真人解说漫", newPlay:"2753.8万", totalPlay:"3690.9万", synopsis:"丈夫把她以3两银子租给村里的猎户一年，当晚她才明白什么是真正对她好的男人。糙汉猎户外表粗旷内心柔情，将她宠上天。"},
          {rank:7, name:"林家弃我百年，妖族来犯跪求我出山", account:"一页追影", affiliate:"待确认", episodes:32, type:"AI仿真人解说漫", newPlay:"2711.5万", totalPlay:"1.25亿", synopsis:"被林家抛弃百年的天才修士独自苦修成绝世强者。当妖族大举入侵、人族危在旦夕，林家跪求他出山。他冷眼相看：当年弃我如敝屣，如今求我又如何？"},
          {rank:8, name:"贾二虎的妖孽人生之皓男出狱", account:"腾蛇短剧", affiliate:"待确认", episodes:75, type:"AI仿真人剧", newPlay:"2022.3万", totalPlay:"2022.3万", synopsis:"贾二虎的儿子皓男出狱后，发现世道已变，曾经的亲人朋友各怀鬼胎。他凭借狱中磨练的铁血意志，一步步揭开当年真相，在复仇与救赎中重塑人生。"},
          {rank:9, name:"好孕连连：豪门家的欢喜债", account:"莓莓短剧", affiliate:"待确认", episodes:46, type:"AI仿真人解说漫", newPlay:"1624.9万", totalPlay:"1673.8万", synopsis:"苏眠因超强易孕体质应聘首富顾家招媳启事，嫁给了顾骁野。她误以为顾骁野心有所属怀孕后离开，顾骁野苦寻半年解开误会。二人重归于好，生下三胞胎，全家轻松戳穿对家小三。"},
          {rank:10, name:"爷爷们护我闯三界", account:"念　念", affiliate:"待确认", episodes:44, type:"3D动态漫", newPlay:"1520.3万", totalPlay:"3011.7万", synopsis:"小女娃被三界强者们争相认女抢着当爹，各路神仙妖怪抖全身本事护娃闯荡三界，爱娃如命的爷爷们为她开辟天地。"},
          {rank:11, name:"邻恶终有报", account:"漫观天下", affiliate:"待确认", episodes:58, type:"AI仿真人解说漫", newPlay:"1502.1万", totalPlay:"3304.2万", synopsis:"缺少公开信息"},
          {rank:12, name:"山村里的生意经", account:"锡恩", affiliate:"待确认", episodes:28, type:"AI仿真人剧", newPlay:"1377.6万", totalPlay:"2348.8万", synopsis:"缺少公开信息"},
          {rank:13, name:"何以渡轻舟", account:"比翼短剧推荐", affiliate:"待确认", episodes:30, type:"AI仿真人剧", newPlay:"1303.3万", totalPlay:"2305.2万", synopsis:"缺少公开信息"},
          {rank:14, name:"我的通房是烧火的", account:"甜味拾荒者", affiliate:"待确认", episodes:59, type:"AI仿真人解说漫", newPlay:"1286.5万", totalPlay:"2419.8万", synopsis:"改编自炩岚小说《他的通房》。女主穿越成被父母二两银子卖到知府做烧火丫头的瘦弱小姑娘，阴差阳错成为权臣通房。穿越时空、强取豪夺、相爱相杀的虐恋故事。"},
          {rank:15, name:"锦鲤娘子状元郎", account:"星漫世界", affiliate:"待确认", episodes:45, type:"AI仿真人解说漫", newPlay:"1205.6万", totalPlay:"1626.0万", synopsis:"贫寒书生柳文轩娶了身带锦鲤运的村女为妻，婚后连连遇贵，从秀才到状元一路高升。当所有人都求着这位幸运娘子时，夫妻二人的感情却面临考验。"},
          {rank:16, name:"安宁一梦", account:"菲菲看剧", affiliate:"待确认", episodes:45, type:"AI仿真人解说漫", newPlay:"1142.6万", totalPlay:"1716.0万", synopsis:"缺少公开信息"},
          {rank:17, name:"太虚神种", account:"奇遇A剧场", affiliate:"待确认", episodes:36, type:"3D解说漫", newPlay:"1132.7万", totalPlay:"1132.9万", synopsis:"太虚门弟子方辰偶得太虚神种，在修仙世界中一步步崛起。神种可窃取万物精华，助他突破修为瓶颈，在宗门争锅与天地大劫中逐步登顶。"},
          {rank:18, name:"重生拒婚：休夫后我成一品诰命", account:"冷少短剧场", affiliate:"待确认", episodes:38, type:"AI仿真人解说漫", newPlay:"1130.8万", totalPlay:"2658.0万", synopsis:"女主重生回到十七岁出嫁前三个月，带着前世被夫家算计的记忆果断拒婚，不顾名声尽毁，走上一条截然不同的人生道路，最终成为一品诰命。"},
          {rank:19, name:"官海惊涛", account:"陈龙（砥砺前行）", affiliate:"待确认", episodes:42, type:"AI仿真人解说漫", newPlay:"1130.4万", totalPlay:"2847.5万", synopsis:"缺少公开信息"},
          {rank:20, name:"掌家主母掌乾坤", account:"夜闹追爷文", affiliate:"待确认", episodes:44, type:"AI仿真人解说漫", newPlay:"1082.2万", totalPlay:"1082.9万", synopsis:"叶绾歌与顾砚辞成婚二十载，顾砚辞为弥补与白月光苏凝霜的年少遗憾，私定儿女与苏家的婚约。叶绾歌为护儿女，设计和离脱身，带儿女开始新生活。"},
          {rank:21, name:"为救闺蜜我又穿越了", account:"伊看漫剧场", affiliate:"待确认", episodes:31, type:"AI仿真人剧", newPlay:"1043.5万", totalPlay:"1794.5万", synopsis:"闺蜜遭渣男小三欺辱，女主穿越化身恶婆婆强势护闺蜜，手撕渣男小三，夺回一切，跨世爱恋超带感。"},
          {rank:22, name:"震惊，我的召唤物全是sss级天赋", account:"铅笔漫元", affiliate:"待确认", episodes:113, type:"2D解说漫", newPlay:"1029.0万", totalPlay:"1316.3万", synopsis:"在召唤师的世界里，主角觉醒后发现自己的召唤物全部拥有SSS级天赋。别人苦求一个S级而不得，他却随手召出神级召唤物，一路碾压称王。"},
          {rank:23, name:"女帝断情，我以斩帝覆天下", account:"芳华动画", affiliate:"待确认", episodes:97, type:"表情包漫", newPlay:"1025.4万", totalPlay:"1306.6万", synopsis:"女帝为登帝位斩断情缘，将曾经的爱人逐出帝宫。男主被弃后觉醒神力，一步步崛起，以斩帝之能覆天下，让女帝追悔莫及。"},
          {rank:24, name:"无声的陷阱", account:"剧变剧场", affiliate:"待确认", episodes:40, type:"AI仿真人解说漫", newPlay:"1024.1万", totalPlay:"2635.9万", synopsis:"缺少公开信息"},
          {rank:25, name:"保姆越界后，我让她全家付出代价", account:"半糖不加冰", affiliate:"待确认", episodes:48, type:"AI仿真人解说漫", newPlay:"984.8万", totalPlay:"3378.7万", synopsis:"保姆越界成瘾，数落主人只顾工作不收拾房间。雇主果断反击，让保姆全家付出代价。"},
          {rank:26, name:"青灵铁盒", account:"小宝漫", affiliate:"待确认", episodes:79, type:"AI仿真人解说漫", newPlay:"946.0万", totalPlay:"3084.6万", synopsis:"缺少公开信息"},
          {rank:27, name:"谈心萌娃：渣爹休想算计总裁爹", account:"墨菲动漫", affiliate:"待确认", episodes:61, type:"3D解说漫", newPlay:"939.9万", totalPlay:"986.6万", synopsis:"缺少公开信息"},
          {rank:28, name:"冥府起义靠烧纸", account:"盛麟剧场", affiliate:"待确认", episodes:65, type:"2D动态漫", newPlay:"934.3万", totalPlay:"3792.1万", synopsis:"缺少公开信息"},
          {rank:29, name:"他说年终奖发了5千，同事告诉我是50万", account:"漫观天下", affiliate:"待确认", episodes:34, type:"AI仿真人解说漫", newPlay:"924.9万", totalPlay:"6360.4万", synopsis:"缺少公开信息"},
          {rank:30, name:"那个替嫁的丫鬟，掀翻了京城王府", account:"都市剧能看", affiliate:"待确认", episodes:43, type:"AI仿真人解说漫", newPlay:"870.2万", totalPlay:"2929.4万", synopsis:"缺少公开信息"}
        ]
      }`;

// 替换 douyin: null
c = c.replace(/("2026-03-19": \{\r?\n\s*)douyin: null,/, '$1' + douyin0319 + ',');

// ===== 2. 插入 3/20 红果数据（新日期） =====
const hongguo0320 = `"2026-03-20": {
      douyin: null,
      hongguo: {
        date: "2026/3/20",
        items: [
          {rank:1, name:"风水天师", tags:"民国/剧情/悬疑", publisher:"时刻互动", onlineDate:"03-17", episodes:61, type:"AI仿真人", hotValue:"7126万", synopsis:"民国奇门传人李乘风继承随缘堂，不顾劝阻悬壶济世。在接手叶家怪病疑案时以葫芦术声名鹊起，后勘破风水困局、揭露阴阳师阴谋，最终布铜钱阵击败九菊一派，守护大夏风水格局。"},
          {rank:2, name:"重生1985，他靠空间发家致富", tags:"时空之旅", publisher:"tomatotv", onlineDate:"03-09", episodes:51, type:"AI仿真人", hotValue:"5641万", synopsis:"萧国峰带着种子铺的记忆重生回1985年，站在自家鱼塘前发誓不再被剥削。他要照顾好爷爷、保护妹妹、娶回受苦的媳妇，凭借先知和空间在风口年代白手起家。"},
          {rank:3, name:"万兽独尊", tags:"玄幻言情/传统玄幻/东方仙侠/武侠", publisher:"短剧版权0642643408", onlineDate:"02-28", episodes:60, type:"AI仿真人", hotValue:"5536万", synopsis:"萧炎觉醒废武魂黑水蛇遭未婚妻悔婚、宗门欺辱，却以血契与蛇共生，靠吞噬进化。他遇酒剑仙、收丑鸟，闯险地、战宗门，涅槃突破后杀入伪善仙界，揭开炼蛊秘辛。"},
          {rank:4, name:"读心奶娃带飞爹", tags:"古风/剧情", publisher:"短剧版权8707625500", onlineDate:"03-10", episodes:52, type:"AI仿真人", hotValue:"5212万", synopsis:"重生成奶娃的李玥，心声竟能被父皇听见，意外揭露太子、二皇子等皆非亲生的惊天秘密。父皇震怒展开雷霆清洗，父女联手肃清后宫阴谋。"},
          {rank:5, name:"罪妻缘铁", tags:"剧情/穿越/逆袭/古代", publisher:"短剧版权8302815141", onlineDate:"03-12", episodes:45, type:"3D", hotValue:"5183万", synopsis:"缺少公开信息"},
          {rank:6, name:"聚宝仙盆之杂灵根才是真BOSS", tags:"玄幻/异界", publisher:"短剧版权6058249292", onlineDate:"03-10", episodes:98, type:"3D", hotValue:"5140万", synopsis:"太虚门杂役弟子贺平生，机缘巧合下获得聚宝盆，从此走上了修仙道路。下品聚气丹放进盆，一日后变成两个且都是极品。普通功法放进去，秒变天阶功法。"},
          {rank:7, name:"刚成僵尸，捡了个女帝当女儿", tags:"奇幻/穿越/系统/表情包", publisher:"17K一起看小说", onlineDate:"03-13", episodes:67, type:"表情包", hotValue:"4800万", synopsis:"普通人顾言意外穿越到灵异复苏的世界，被邪修捉去炼成僵尸。绝望之际他遇到一个弃婴，小婴儿的出现让他找到活下去的希望——这个女娃竟是未来的女帝。"},
          {rank:8, name:"军文王妃穿越，医好王爷后他非要当我小弟", tags:"剧情/时空之旅/古风", publisher:"爱看互动短剧", onlineDate:"03-11", episodes:64, type:"AI仿真人", hotValue:"4799万", synopsis:"现代军医文清歌意外穿越成声名狼藉的冲喜王妃，面对深陷毒疾与朝堂阴谋的王爷萧彻。她凭精湛医术一次次替他续命，在王府明争暗斗中识破奸人、收服人心。"},
          {rank:9, name:"菜弱如青无人娶，直到我的出现", tags:"年代", publisher:"沈阳不鸣文化科技有限公司", onlineDate:"03-12", episodes:56, type:"AI仿真人", hotValue:"4747万", synopsis:"缺少公开信息"},
          {rank:10, name:"震惊！洞房夜丑妻竟变绝美女帝", tags:"玄幻/穿越/系统/逆袭", publisher:"tomatotv", onlineDate:"02-06", episodes:74, type:"AI仿真人", hotValue:"4733万", synopsis:"废物赘婿在大婚之夜迎来转机——温顺隐忍的丑妻褪去胎记、紫发飞扬，一掌镇杀强敌。她轻抬眼眸：'夫君，重新认识一下，我乃瑶池女帝。'"},
          {rank:11, name:"三千庇护第九季", tags:"脑洞/穿越/系统/逆袭", publisher:"阅文漫鸣剧场", onlineDate:"03-14", episodes:44, type:"2D", hotValue:"4723万", synopsis:"末世生存背景下，陈凡率领众人在荒原建立避难所，以蕴灵阁和弑神炮对抗各方势力与诡物威胁。第九季中诡王来袭，陈凡绝地反击终斩诡王，天地异象惊现。"},
          {rank:12, name:"诡异婚配：我诡配，老婆软糯校花", tags:"恋爱/穿越/异能/系统", publisher:"短剧版权8642826809", onlineDate:"02-27", episodes:60, type:"AI仿真人", hotValue:"4683万", synopsis:"顾渊穿越平行世界成为诡异，一剑屠戮万千厉诡，成就无上诡帝。当诡异婚配系统为他分配了一位软糯校花作为妻子，他在守护她的过程中找回了人性与温情。"},
          {rank:13, name:"踪刀天师", tags:"战神赘婿", publisher:"短剧版权6045376139", onlineDate:"02-26", episodes:80, type:"AI仿真人", hotValue:"4627万", synopsis:"缺少公开信息"},
          {rank:14, name:"全宗老六", tags:"玄幻/表情包/异界", publisher:"星芒文化", onlineDate:"03-06", episodes:80, type:"表情包", hotValue:"4604万", synopsis:"神剑宗大师兄张青锋九年前惨遭魔女暗算，痛失五百年童子之身连带修为尽失。九年后魔女找上门告知给他生了个女儿，张青锋怒而追查，却一路卷入更大的修仙漩涡。"},
          {rank:15, name:"绝症后，我误嫁首富老公", tags:"都市日常/豪门总裁", publisher:"短剧版权3933872078", onlineDate:"02-26", episodes:76, type:"AI仿真人", hotValue:"4588万", synopsis:"缺少公开信息"},
          {rank:16, name:"天降福宝助我登基为帝", tags:"玄幻脑洞/东方仙侠", publisher:"爱看互动短剧", onlineDate:"03-05", episodes:60, type:"AI仿真人", hotValue:"4550万", synopsis:"小宝本是定王府的小郡主，自幼被定王的仇家掳走丢弃，有幸被道士诸葛岁捡到。小宝六岁时命运转折，凭借天降福宝之能帮助落魄皇子一步步登基为帝。"},
          {rank:17, name:"深宫藏拙", tags:"古风", publisher:"短剧版权6239592226", onlineDate:"03-09", episodes:45, type:"AI仿真人", hotValue:"4538万", synopsis:"缺少公开信息"},
          {rank:18, name:"儿媳的重生棋局", tags:"都市日常", publisher:"海看股份", onlineDate:"02-16", episodes:40, type:"AI仿真人", hotValue:"4537万", synopsis:"儿媳重生回到婚后初期，带着前世的记忆识破婆家与丈夫的种种算计。她不再隐忍，步步为营布下棋局，在家庭权力斗争中优雅反击、扭转命运。"},
          {rank:19, name:"转生蚊子，吸哭的校花是女帝重生", tags:"脑洞/重生/系统/升级流", publisher:"短剧版权8642826809", onlineDate:"02-13", episodes:60, type:"表情包", hotValue:"4530万", synopsis:"主角意外转生为一只蚊子，绑定升级系统后靠吸血不断进化。他叮上的校花竟是重生归来的女帝，两人在荒诞又爆笑的互动中联手对抗强敌。"},
          {rank:20, name:"穿书末世，我靠系统国货逆袭", tags:"脑洞/穿越/系统/国物资", publisher:"重庆阅品科技有限公司", onlineDate:"03-09", episodes:60, type:"AI仿真人", hotValue:"4494万", synopsis:"缺少公开信息"},
          {rank:21, name:"三岁判官镇国运，将军爹爹跪着护", tags:"玄幻脑洞/传统玄幻/古言脑洞/古风", publisher:"短剧版权5991838918", onlineDate:"03-05", episodes:60, type:"AI仿真人", hotValue:"4492万", synopsis:"天雷落府，三岁奶团苏糯糯一出生就被姨娘扣上'灾星'帽子，连将军爹苏景翊都心生忌惮。实际上苏糯糯是转世判官，拥有断阴阳、镇国运的能力。"},
          {rank:22, name:"斩仙台下，我震惊了诸神！", tags:"奇幻/穿越/异界", publisher:"智品后台", onlineDate:"12-01", episodes:57, type:"2D", hotValue:"4487万", synopsis:"改编自同名小说。主角在天庭斩仙台被处刑之际爆发隐藏实力，一举震惊诸神。红果漫剧'剧王'级作品，以仙界逆袭为主线，台词引人深思。"},
          {rank:23, name:"时间暂停，我在末世无敌了", tags:"末世/系统/都市/校园", publisher:"短剧版权6559576838", onlineDate:"01-16", episodes:60, type:"AI仿真人", hotValue:"4473万", synopsis:"末世降临，主角觉醒时间暂停异能。当所有人都在末世中苦苦挣扎时，他可以随意冻结时间搜刮物资、碾压变异体，在校园和都市中所向披靡。"},
          {rank:24, name:"大明战神朱三爷", tags:"宫廷/重生/逆袭/表情包", publisher:"福州木头软件有限公司", onlineDate:"03-12", episodes:75, type:"表情包", hotValue:"4468万", synopsis:"以'大明战神'明英宗朱祁镇为灵感创作的搞笑逆袭漫剧。主角重生为朱三爷，在宫廷权谋中以表情包式的画风展现重生逆袭、整顿朝纲的爆笑故事。"},
          {rank:25, name:"透视：我的双眼能鉴定万物", tags:"都市脑洞", publisher:"海看股份", onlineDate:"03-17", episodes:80, type:"AI仿真人", hotValue:"4467万", synopsis:"陈天赐遭女友背叛，被卖至翡翠矿场。一次意外令其双眼觉醒，获得鉴定万物价格之能。他凭此玩转珠宝古董，积累巨额财富，更助红颜渡过危机。"},
          {rank:26, name:"人在修仙世界，和谁都能五五开？", tags:"古风/反转/逆袭", publisher:"短剧版权4980606402", onlineDate:"03-11", episodes:70, type:"3D", hotValue:"4461万", synopsis:"李舟君穿越成为仙门山主的第四十年，终于得到一个和谁都能五五开的系统。无论对手是万年老怪还是绝世仙帝，他都能与之五五开。"},
          {rank:27, name:"师尊，机缘给您别骂我", tags:"时空之旅", publisher:"tomatotv", onlineDate:"03-06", episodes:75, type:"AI仿真人", hotValue:"4455万", synopsis:"缺少公开信息"},
          {rank:28, name:"爹且慢，我来了", tags:"萌宝/古代", publisher:"短剧版权3141518918", onlineDate:"03-09", episodes:34, type:"AI仿真人", hotValue:"4453万", synopsis:"缺少公开信息"},
          {rank:29, name:"三千庇护第八季", tags:"奇幻/异界", publisher:"短剧版权8642826809", onlineDate:"03-09", episodes:42, type:"2D", hotValue:"4444万", synopsis:"陈凡在荒原上率众抵御诡物入侵，升级蕴灵阁解锁批量制造能力，以弑神炮提升战力。各方势力纷纷造访，陈凡在乱局中守护三千避难所。"},
          {rank:30, name:"救赎歌王", tags:"都市日常/逆袭/剧情/快穿", publisher:"短剧版权0201759569", onlineDate:"03-04", episodes:102, type:"2D", hotValue:"4441万", synopsis:"缺少公开信息"}
        ]
      }
    },`;

// 在 return { 后面插入新日期
c = c.replace(/return \{\r?\n/, 'return {\n    ' + hongguo0320 + '\n');

// 更新 BUILD_TS
const ts = new Date().toISOString().replace(/[-:T]/g, '').substring(0, 13);
c = c.replace(/BUILD_TS\s*=\s*"[^"]*"/, `BUILD_TS = "${ts}"`);

fs.writeFileSync('index.html', c, 'utf8');
console.log('Data inserted successfully!');
console.log('BUILD_TS updated to:', ts);

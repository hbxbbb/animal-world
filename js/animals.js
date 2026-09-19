(() => {
  const wm = (file, width = 1400) =>
    `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

  const raw = [
    {
      id: "lion",
      name: "非洲狮",
      latin: "Panthera leo",
      region: "非洲",
      habitat: "稀树草原",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      featured: true,
      unsplash: ["photo-1546182990-dffeafbe841d", "photo-1614027164847-1f28c4100ba6"],
      files: ["Lion waiting in Namibia.jpg", "Panthera leo.jpg", "Male African lion.jpg"],
      summary: "草原上的社会性大型猫科，以狮群协作狩猎闻名。",
      story: "非洲狮是少数真正过群体生活的大型猫科。狮群通常由几头母狮、幼崽和一头或数头成年雄狮组成。母狮负责大部分狩猎，雄狮则以鬃毛和体型宣示领地。落日下的低吼可以传出数公里，那是非洲旷野最容易辨认的声音之一。",
      facts: ["肩高约 1.2 米", "吼声可传 8 公里", "主要猎物为斑马与角马"]
    },
    {
      id: "elephant",
      name: "非洲象",
      latin: "Loxodonta africana",
      region: "非洲",
      habitat: "草原 / 疏林",
      diet: "植食",
      status: "濒危",
      statusLevel: "en",
      featured: true,
      unsplash: ["photo-1557050543-4d5f4e07ef46", "photo-1564760055775-d63b17a55c44"],
      files: ["African Bush Elephant.jpg", "Loxodonta africana - two.jpg", "Elephant near ddab.jpg"],
      summary: "陆地上最大的哺乳动物，象鼻既是鼻子，也是最灵巧的前肢。",
      story: "非洲象用象鼻饮水、卷枝、安抚幼象，甚至能分辨远处的雨云。母系家族由经验丰富的雌性族长带领，记忆中保存着水源和迁徙路线。长牙是延长的门齿，也因此让它们长期面临偷猎压力。",
      facts: ["体重可达 6 吨", "孕期约 22 个月", "日行数十公里寻找水源"]
    },
    {
      id: "giraffe",
      name: "长颈鹿",
      latin: "Giraffa camelopardalis",
      region: "非洲",
      habitat: "稀树草原",
      diet: "植食",
      status: "易危",
      statusLevel: "vu",
      unsplash: ["photo-1547721064-8716ad6c0c0e"],
      files: ["Giraffe Mikumi National Park.jpg", "Giraffa camelopardalis -head-8a.jpg", "Two giraffes.jpg"],
      summary: "世界上最高的陆地动物，斑纹像指纹一样各不相同。",
      story: "长颈鹿用长舌卷取金合欢树冠上的嫩叶。为了把血液送到两米高的头部，它们拥有特别厚实的心脏和单向瓣膜。看似安静的散步，其实是在广阔领地里持续巡视食物与同伴。",
      facts: ["身高可达 5.5 米", "舌头约 45 厘米", "睡眠每天可能不足 2 小时"]
    },
    {
      id: "zebra",
      name: "斑马",
      latin: "Equus quagga",
      region: "非洲",
      habitat: "草原",
      diet: "植食",
      status: "近危",
      statusLevel: "nt",
      unsplash: ["photo-1501706362039-c06b2d715385"],
      files: ["Equus quagga.jpg", "Plains Zebra Equus quagga.jpg", "Zebra Botswana.jpg"],
      summary: "黑白条纹既是伪装，也可能用来扰乱吸血昆虫。",
      story: "每一匹斑马的条纹排列都独一无二。迁徙季节，它们会与角马结成巨大的移动队伍，穿过河流和草原。条纹在热浪中晃动，能让狮群更难锁定单一个体。",
      facts: ["条纹如指纹般独特", "社群等级分明", "是塞伦盖蒂大迁徙成员"]
    },
    {
      id: "cheetah",
      name: "猎豹",
      latin: "Acinonyx jubatus",
      region: "非洲",
      habitat: "开阔草原",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Cheetah Kruger.jpg",
        "2009-cheetah-sprint.jpg",
        "037 Cheetah close-up in the Serengeti National Park Photo by Giles Laurent.jpg",
        "Cheetah (Kruger National Park, South Africa, 2001).jpg"
      ],
      summary: "陆地短跑冠军，脸上有泪痕般的条纹，体型比花豹更细长。",
      story: "猎豹的锁骨灵活、爪子半收缩，身体像一支被拉开的弓。一次全力冲刺后必须休息散热，因此狩猎窗口极短。泪痕般的面部条纹能减少眩光，帮助它们在正午锁定瞪羚。",
      facts: ["极速约 110 公里/小时", "3 秒内可加速到 100", "一次冲刺后需长时间休息"]
    },
    {
      id: "leopard",
      name: "花豹",
      latin: "Panthera pardus",
      region: "非洲",
      habitat: "疏林 / 岩地",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      unsplash: ["photo-1456926631375-92c8ce872def"],
      files: ["Panthera pardus.jpg", "Leopard africa.jpg", "African leopard.jpg"],
      summary: "会把猎物拖上树的斑点猫科，常被误认成猎豹。",
      story: "花豹比猎豹更强壮，也更善于隐蔽。玫瑰形斑点、粗壮四肢和能上树的前爪，是它们与猎豹最明显的区别。一只花豹可以把相当于自己体重的羚羊吊上枝桠，躲开狮和鬣狗。",
      facts: ["夜行伏击为主", "分布跨非洲与亚洲", "斑点中心常有更深色点"]
    },
    {
      id: "gorilla",
      name: "山地大猩猩",
      latin: "Gorilla beringei beringei",
      region: "非洲",
      habitat: "山地雨林",
      diet: "植食",
      status: "濒危",
      statusLevel: "en",
      unsplash: ["photo-1540573133985-87b6da6d54a9"],
      files: ["Mountain gorilla Rwanda.jpg", "Gorilla beringei beringei.jpg", "Silverback gorilla.jpg"],
      summary: "最接近人类的大型灵长类之一，银背雄性守护整个家族。",
      story: "山地大猩猩生活在中非高地的竹林与苔藓林中。银背雄性用胸口击打和低沉吼声维持秩序，但日常更多是安静地咀嚼茎叶。保护工作让它们从灭绝边缘缓慢回升，仍极度依赖完整的森林廊道。",
      facts: ["共享约 98% 人类基因", "家族由银背带领", "主要分布在维龙加火山区"]
    },
    {
      id: "flamingo",
      name: "火烈鸟",
      latin: "Phoenicopterus roseus",
      region: "非洲",
      habitat: "盐湖 / 浅滩",
      diet: "滤食",
      status: "无危",
      statusLevel: "lc",
      unsplash: ["photo-1497206365907-f5e630693df0"],
      files: ["Phoenicopterus roseus.jpg", "Greater Flamingo Phoenicopterus roseus.jpg", "Flamingos Lake Nakuru.jpg"],
      summary: "粉红色来自食物中的类胡萝卜素，是会走路的晚霞。",
      story: "火烈鸟倒立着头，用栉状喙过滤盐水中的藻类和甲壳动物。成千上万只聚集时，湖面会变成一片移动的珊瑚色。单脚站立能减少热量散失，也是它们最常被拍到的姿态。",
      facts: ["粉色来自食物色素", "喜集群繁殖", "喙是天然过滤器"]
    },
    {
      id: "hippo",
      name: "河马",
      latin: "Hippopotamus amphibius",
      region: "非洲",
      habitat: "河流 / 湖岸",
      diet: "植食",
      status: "易危",
      statusLevel: "vu",
      files: ["Hippopotamus amphibius.jpg", "Hippo pod.jpg", "Hippopotamus in water.jpg"],
      summary: "白天把身体沉进河水散热，夜里上岸吃草。",
      story: "河马的眼睛、耳朵和鼻孔都长在头顶，适合只露出水面观察。它们的皮肤会分泌红色保护物质，既防晒也抗菌。看似笨重，却是非洲淡水边最需要保持距离的动物之一。",
      facts: ["可在水下闭气数分钟", "夜间可走数公里觅食", "犬齿用于威慑而非吃肉"]
    },
    {
      id: "rhino",
      name: "黑犀",
      latin: "Diceros bicornis",
      region: "非洲",
      habitat: "灌丛草原",
      diet: "植食",
      status: "极危",
      statusLevel: "cr",
      files: ["Diceros bicornis.jpg", "Black rhinoceros.jpg", "Black rhino Namibia.jpg"],
      summary: "用可活动的上唇撕扯灌木，两只角让它长期处于偷猎阴影里。",
      story: "黑犀比白犀更喜欢灌丛，上唇像一只灵活的手指。角是角蛋白，和我们的指甲同源，却因此被盗猎。今天每一头黑犀的生存，都几乎对应着一整套反盗猎网络。",
      facts: ["IUCN 极危", "上唇适合摘取枝叶", "领域性很强"]
    },
    {
      id: "meerkat",
      name: "狐獴",
      latin: "Suricata suricatta",
      region: "非洲",
      habitat: "干旱灌丛",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: ["Suricata suricatta.jpg", "Meerkat sentinel.jpg", "Meerkat family.jpg"],
      summary: "沙漠里的哨兵，总有一只站在土丘上望风。",
      story: "狐獴过着高度分工的社群生活。有的负责警戒，有的带领幼崽学习挖蝎子。黑色眼圈减少眩光，让它们能在卡拉哈里的强光下看清远处的鹰。",
      facts: ["轮流放哨", "能对毒素有一定耐受", "洞穴系统复杂"]
    },
    {
      id: "panda",
      name: "大熊猫",
      latin: "Ailuropoda melanoleuca",
      region: "亚洲",
      habitat: "高山竹林",
      diet: "植食",
      status: "易危",
      statusLevel: "vu",
      featured: true,
      unsplash: ["photo-1564349683136-77e08dba1ef7"],
      files: ["Giant Panda 2004-03-2.jpg", "Ailuropoda melanoleuca.jpg", "Grosser Panda.JPG"],
      summary: "中国的伞护种明星，几乎只吃竹子，却仍是食肉目动物。",
      story: "大熊猫的“伪拇指”其实是腕骨特化，用来握住竹竿。它们每天要进食十多个小时，才能从低营养的竹子里提取足够能量。保护栖息地不仅救了熊猫，也保住了同一片山里的金丝猴、扭角羚和无数溪流。",
      facts: ["每天可吃 12–38 公斤竹", "属于熊科", "野外主要分布于四川等地"]
    },
    {
      id: "tiger",
      name: "东北虎",
      latin: "Panthera tigris altaica",
      region: "亚洲",
      habitat: "针阔混交林",
      diet: "肉食",
      status: "濒危",
      statusLevel: "en",
      featured: true,
      unsplash: ["photo-1561731216-c3a0dcbb9670"],
      files: ["Siberian Tiger by Malene Th.jpg", "Panthera tigris altaica.jpg", "Siberian tiger.jpg"],
      summary: "体型最大的虎亚种，也是温带森林里的顶级猎手。",
      story: "东北虎需要广阔领地追踪鹿和野猪。厚密的被毛和宽大的爪垫让它们能在雪地潜行。一头虎的存在，往往说明整片森林的食物链仍然完整。",
      facts: ["体重可超 300 公斤", "夜行性较强", "每只虎的条纹独一无二"]
    },
    {
      id: "red-panda",
      name: "小熊猫",
      latin: "Ailurus fulgens",
      region: "亚洲",
      habitat: "高山阔叶林",
      diet: "植食为主",
      status: "濒危",
      statusLevel: "en",
      files: ["Ailurus fulgens.jpg", "Red Panda.JPG", "Ailurus fulgens - Karlsruhe Zoo 01.jpg"],
      summary: "不是大熊猫的幼崽，而是独立的“小猫熊”家族。",
      story: "小熊猫擅长爬树，白天常蜷在枝桠上睡觉，黄昏才出来觅食竹叶与浆果。锈红色的皮毛在苔藓林里像一块移动的秋叶。它们比大熊猫更少被看见，栖息地碎片化也更严重。",
      facts: ["单独成科", "尾巴可保暖与平衡", "分布横断山区至喜马拉雅"]
    },
    {
      id: "snow-leopard",
      name: "雪豹",
      latin: "Panthera uncia",
      region: "亚洲",
      habitat: "高山裸岩",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      files: ["Irbis4.JPG", "Snow leopard portrait.jpg", "Uncia uncia.jpg"],
      summary: "高原幽灵，尾巴几乎与身体等长，用来在悬崖上保持平衡。",
      story: "雪豹沿着山脊和碎石坡追踪岩羊。灰白斑纹让它们融化在雪和岩石里，因此很少有人亲眼见过野生个体。牧民与雪豹的共存，是中亚保护工作里最关键的课题。",
      facts: ["尾长接近身长", "栖息海拔可超 5000 米", "一次可跃出 15 米"]
    },
    {
      id: "peacock",
      name: "蓝孔雀",
      latin: "Pavo cristatus",
      region: "亚洲",
      habitat: "林缘 / 农田",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: ["Pavo cristatus.jpg", "Indian Peafowl.jpg", "Pavo cristatus Phasianidae.jpg"],
      summary: "开屏不是为了人类，而是雄鸟写给雌鸟的情书。",
      story: "蓝孔雀原产印度次大陆。雄鸟尾上覆羽展开时，眼斑会随光线变幻金属绿与宝蓝。开屏消耗能量，也更容易被天敌发现，因此这是一场关于健康与勇气的展示。",
      facts: ["尾屏可超 1.5 米", "叫声高亢传远", "被许多文化视为吉祥"]
    },
    {
      id: "crane",
      name: "丹顶鹤",
      latin: "Grus japonensis",
      region: "亚洲",
      habitat: "湿地",
      diet: "杂食",
      status: "易危",
      statusLevel: "vu",
      files: ["Grus japonensis.jpg", "Grus japonensis -Hokkaido, Japan -several-8 (1).jpg", "Grue du Japon DSCF1360.jpg"],
      summary: "东亚湿地的白色信使，求偶舞蹈像一场庄重的双人舞。",
      story: "丹顶鹤在浅水中觅食鱼虾和植物根茎。它们对湿地高度依赖，迁徙路线穿过东亚多处河口。头顶那一点朱红，是成鸟才有的标记。",
      facts: ["体长超过 1.4 米", "成对终生相伴", "繁殖于东北湿地"]
    },
    {
      id: "golden-monkey",
      name: "川金丝猴",
      latin: "Rhinopithecus roxellana",
      region: "亚洲",
      habitat: "高山阔叶林",
      diet: "植食",
      status: "濒危",
      statusLevel: "en",
      files: ["Rhinopithecus roxellana.jpg", "Golden snub-nosed monkey.jpg", "Sichuan golden monkey.jpg"],
      summary: "仰着蓝色的鼻子，金毛在秦岭和横断山的冷雾里发光。",
      story: "川金丝猴是中国特有的仰鼻猴。扁平的鼻子适应高海拔寒冷，金橙色被毛让它们在落叶林里像一群会移动的阳光。它们的社群很大，常分成小单元又重新聚合。",
      facts: ["中国特有种", "仰鼻适应高寒", "与大熊猫共享部分栖息地"]
    },
    {
      id: "asian-elephant",
      name: "亚洲象",
      latin: "Elephas maximus",
      region: "亚洲",
      habitat: "热带森林",
      diet: "植食",
      status: "濒危",
      statusLevel: "en",
      files: ["Elephas maximus.jpg", "Asian elephant.jpg", "Indian elephant.jpg"],
      summary: "耳朵比非洲象更小，额头有两个明显的隆起。",
      story: "亚洲象长期与人类共享同一片农田和廊道。它们的门齿通常只有雄性发达，也因此常被误认成“没有象牙的非洲象”。在西双版纳到印度的迁徙路线上，如何让象群走过而不冲突，是亚洲保护里最具体的题目。",
      facts: ["额头双隆起", "雌性多无长牙", "是亚洲体型最大的陆生动物"]
    },
    {
      id: "ibis",
      name: "朱鹮",
      latin: "Nipponia nippon",
      region: "亚洲",
      habitat: "稻田 / 湿地",
      diet: "肉食",
      status: "濒危",
      statusLevel: "en",
      files: ["Nipponia nippon.jpg", "Crested Ibis.jpg", "Toki bird.jpg"],
      summary: "从只剩几只到重新飞回东亚稻田的粉红色精灵。",
      story: "朱鹮曾被认为在中国野外消失，1981 年在陕西洋县被重新发现。它们喜欢在浅水田里啄泥鳅和蛙。今天的恢复既是物种故事，也是稻田还能不能给野生动物留一寸浅水的故事。",
      facts: ["繁殖期面部更红", "曾一度濒临灭绝", "依赖传统稻田湿地"]
    },
    {
      id: "orangutan",
      name: "婆罗洲猩猩",
      latin: "Pongo pygmaeus",
      region: "亚洲",
      habitat: "热带雨林",
      diet: "植食",
      status: "极危",
      statusLevel: "cr",
      files: ["Pongo pygmaeus.jpg", "Bornean orangutan.jpg", "Orangutan in tree.jpg"],
      summary: "树冠上的红毛智者，几乎把一生都花在枝桠之间。",
      story: "猩猩用长臂在树冠间荡行，会做简易工具取蜂蜜和白蚁。油棕扩张让它们的森林变成碎片。看见一只母猩猩把幼崽抱在胸前穿过残林，等于看见东南亚雨林还剩多少完整。",
      facts: ["IUCN 极危", "会使用简单工具", "树栖性极强"]
    },
    {
      id: "brown-bear",
      name: "棕熊",
      latin: "Ursus arctos",
      region: "欧洲",
      habitat: "山地森林",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      unsplash: ["photo-1530595467537-0b5996c41f2d"],
      files: ["Ursus arctos.jpg", "Brown bear.jpg", "Eurasian brown bear.jpg"],
      summary: "从欧洲到西伯利亚都能见到的大型杂食者，嗅觉极其敏锐。",
      story: "棕熊会翻石头找昆虫，也会在秋季狂吃浆果和坚果为冬眠储备脂肪。欧洲残存的种群多生活在喀尔巴阡和斯堪的纳维亚的深山里，是荒野还在的证据。",
      facts: ["嗅觉远超猎犬", "冬眠可数月", "领地意识强但不主动攻击"]
    },
    {
      id: "red-fox",
      name: "赤狐",
      latin: "Vulpes vulpes",
      region: "欧洲",
      habitat: "林地 / 城市边缘",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      unsplash: ["photo-1474511323896-e8d5c187d69e"],
      files: ["Vulpes vulpes sitting.jpg", "Red fox.jpg", "Vulpes vulpes.jpg"],
      summary: "适应力极强的中型犬科，从森林走到了城市夜巷。",
      story: "赤狐会用跳跃扑击捕捉田鼠，耳朵能听见雪下的细微响动。在欧洲许多城镇，它们学会了夜间穿过花园。灵活、谨慎，又带着一点戏剧性的优雅。",
      facts: ["分布最广的犬科之一", "尾尖常为白色", "繁殖期会共用巢穴"]
    },
    {
      id: "lynx",
      name: "欧亚猞猁",
      latin: "Lynx lynx",
      region: "欧洲",
      habitat: "针叶林",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: ["Lynx lynx2.jpg", "Eurasian lynx.jpg", "Lynx lynx.jpg"],
      summary: "耳尖簇毛和厚爪垫，是为雪林准备的静音猎手。",
      story: "猞猁喜欢独自埋伏，主要捕食狍和野兔。耳尖的黑色簇毛能帮助判断声音方向。在重新野化的欧洲森林里，它们的回归意味着中型猎物重新有了自然调控者。",
      facts: ["后足宽大适于雪地", "黄昏与夜间活动", "一次可跨越数米"]
    },
    {
      id: "red-deer",
      name: "马鹿",
      latin: "Cervus elaphus",
      region: "欧洲",
      habitat: "林缘草地",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      unsplash: ["photo-1484406566174-9da000fda645"],
      files: ["Cervus elaphus.jpg", "Red deer stag.jpg", "Cervus elaphus Luc Viatour.jpg"],
      summary: "秋天薄雾山谷里，雄鹿的吼声是求偶季节的号角。",
      story: "马鹿雄性每年重新长出鹿角，并在发情季用角力和长啸争夺群体。它们塑造林缘植被，也是狼和猞猁的重要猎物，把森林食物网连在一起。",
      facts: ["雄性每年换角", "群居雌性带领幼崽", "分布横跨欧亚"]
    },
    {
      id: "hedgehog",
      name: "欧洲刺猬",
      latin: "Erinaceus europaeus",
      region: "欧洲",
      habitat: "花园 / 林地",
      diet: "杂食",
      status: "近危",
      statusLevel: "nt",
      files: ["Erinaceus europaeus.jpg", "European hedgehog.jpg", "Hedgehog rolled.jpg"],
      summary: "夜里在花园翻落叶的小球，遇险就把自己卷成刺包。",
      story: "刺猬靠嗅觉寻找蠕虫、甲虫和落下的果实。道路和整齐草坪让它们的夜行路线越来越窄。一座留着落叶堆的花园，往往比一块完美草坪更适合这种安静的邻居。",
      facts: ["夜行性", "遇险会蜷成球", "冬眠于落叶堆"]
    },
    {
      id: "beaver",
      name: "欧亚河狸",
      latin: "Castor fiber",
      region: "欧洲",
      habitat: "河流 / 湿地",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: ["Castor fiber.jpg", "Eurasian beaver.jpg", "Beaver dam.jpg"],
      summary: "会修水坝的工程师，能把一条小溪变成一片湿地。",
      story: "河狸咬倒树木、堆坝拦水，让鱼类、两栖类和鸟类都多了一处栖身之所。欧洲许多国家正在把它们请回河流。一只河狸改变的不只是自己的家，还有整条河谷的形状。",
      facts: ["门齿终生生长", "能改造水文", "夜行且善游泳"]
    },
    {
      id: "puffin",
      name: "北极海鹦",
      latin: "Fratercula arctica",
      region: "欧洲",
      habitat: "海崖 / 北大西洋",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      files: ["Fratercula arctica.jpg", "Atlantic puffin.jpg", "Puffin with fish.jpg"],
      summary: "彩色的喙像被海风画过，一次能横衔一排小鱼。",
      story: "海鹦在海崖上的洞穴里繁殖，出海潜捕沙鳗。繁殖季的喙最鲜艳，冬季又会褪去一层。渔业和海洋升温让它们的“鱼串”越来越难凑齐。",
      facts: ["喙能同时衔多条鱼", "在洞穴中繁殖", "冬季远洋生活"]
    },
    {
      id: "owl",
      name: "仓鸮",
      latin: "Tyto alba",
      region: "欧洲",
      habitat: "农田 / 谷仓",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      unsplash: ["photo-1553264701-d13871843174"],
      files: ["Tyto alba close up.jpg", "Barn owl.jpg", "Tyto alba.jpg"],
      summary: "心形面盘是天然雷达，让它能在全黑中捕捉田鼠。",
      story: "仓鸮的羽毛边缘呈梳状，飞行几乎无声。它们是农田生态系统的免费捕鼠者。旧谷仓和树洞减少后，人工巢箱成为很多地区把它们留住的方法。",
      facts: ["飞行近乎无声", "面盘汇聚声波", "全球分布最广的鸮类之一"]
    },
    {
      id: "bison",
      name: "美洲野牛",
      latin: "Bison bison",
      region: "北美洲",
      habitat: "草原",
      diet: "植食",
      status: "近危",
      statusLevel: "nt",
      featured: true,
      unsplash: ["photo-1543946207-39bd91e70ca7"],
      files: ["American bison k5680-1.jpg", "Bison bison.jpg", "American bison herd.jpg"],
      summary: "北美草原曾经的主人，厚肩与头骨能推开冬雪找草。",
      story: "美洲野牛一度数以千万计，几乎定义了大平原的生态。翻拱土地、传播种子、为草原制造镶嵌生境。今天的恢复项目正在把它们重新带回原野，也带回原住民文化叙事的中心。",
      facts: ["肩高可超 1.8 米", "冬季靠头拱雪觅食", "是北美最大陆生哺乳动物"]
    },
    {
      id: "bald-eagle",
      name: "白头海雕",
      latin: "Haliaeetus leucocephalus",
      region: "北美洲",
      habitat: "河湖海岸",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      unsplash: ["photo-1611689342806-086263b657c0"],
      files: ["Haliaeetus leucocephalus2.jpg", "Bald Eagle Portrait.jpg", "Bald eagle flying.jpg"],
      summary: "美国的象征猛禽，从农药危机中被保护行动拉了回来。",
      story: "白头海雕喜欢沿着河流筑巨大的巢，一对配偶会多年沿用并不断加高。DDT 曾让它们的蛋壳变薄，禁令与栖息地保护让种群显著恢复，成为现代保育最常被讲述的成功故事之一。",
      facts: ["翼展超过 2 米", "主食鱼类", "成鸟头部才变白"]
    },
    {
      id: "grey-wolf",
      name: "灰狼",
      latin: "Canis lupus",
      region: "北美洲",
      habitat: "森林 / 苔原",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      unsplash: ["photo-1602491453631-e2a5ad90a97c"],
      files: ["Canis lupus laying.jpg", "Grey wolf.jpg", "Canis lupus.jpg"],
      summary: "高度社会性的顶级捕食者，嚎叫用来召集同伴和划分领地。",
      story: "灰狼以家庭式狼群协作围猎鹿和麋。黄石公园重新引入狼之后，植被、河流形态和整个食物网都发生了连锁变化。它们提醒人们：一种动物可以改写一片风景。",
      facts: ["狼群有明确分工", "嚎叫可传数公里", "一次行程能跑出很远"]
    },
    {
      id: "raccoon",
      name: "浣熊",
      latin: "Procyon lotor",
      region: "北美洲",
      habitat: "林地 / 城市",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      unsplash: ["photo-1497752531616-c3af1da0d214"],
      files: ["Procyon lotor 1.jpg", "Common raccoon.jpg", "Raccoon washing.jpg"],
      summary: "前掌极度灵敏，被称作“长着手的面具侠”。",
      story: "浣熊喜欢在水边翻找甲壳和蛙类，城市里则学会打开垃圾桶。黑眼罩不是伪装罪犯，而是帮助减少眩光。聪明、好奇，也因此更容易和人类生活重叠。",
      facts: ["前掌触觉极发达", "夜行性", "适应城市能力强"]
    },
    {
      id: "moose",
      name: "驼鹿",
      latin: "Alces alces",
      region: "北美洲",
      habitat: "北方森林",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: ["Alces alces.jpg", "Moose bull.jpg", "Moose in water.jpg"],
      summary: "北半球体型最大的鹿，喜欢站在浅水里啃水草。",
      story: "驼鹿的掌状鹿角像两把展开的铲子。它们能潜入浅湖取食，长腿则适合跨越沼泽。在阿拉斯加和加拿大的针叶林里，看见一头驼鹿从雾里走出来，尺度会突然失真。",
      facts: ["是体型最大的鹿科", "善涉水觅食", "雄性秋季换发情角"]
    },
    {
      id: "cougar",
      name: "美洲狮",
      latin: "Puma concolor",
      region: "北美洲",
      habitat: "山地 / 森林",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: ["Puma concolor.jpg", "Cougar portrait.jpg", "Mountain lion.jpg"],
      summary: "从育空到南美都能活下来的多面猎手，没有斑纹却极会隐藏。",
      story: "美洲狮没有狮那样的鬃毛，也没有豹那样的斑点，一身素色反而更利于潜行。它们的分布是西半球猫科里最广的之一。城市边缘偶有目击，说明荒野和郊区之间的边界比地图更模糊。",
      facts: ["跳跃能力极强", "单独狩猎", "分布从加拿大到巴塔哥尼亚"]
    },
    {
      id: "sea-otter",
      name: "海獭",
      latin: "Enhydra lutris",
      region: "北美洲",
      habitat: "海藻林",
      diet: "肉食",
      status: "濒危",
      statusLevel: "en",
      files: ["Enhydra lutris.jpg", "Sea otter.jpg", "Sea otter with pup.jpg"],
      summary: "仰漂在海藻床上，用石头砸开海胆和贝壳。",
      story: "海獭是少见会使用工具的海洋哺乳动物。它们控制海胆，海藻林才不至于被啃光。皮毛极密，所以一旦被油污黏住就很难保暖。一只仰躺的海獭，其实是整片近海森林的守门人。",
      facts: ["毛皮极致浓密", "会用石头开贝", "母獭把幼崽放在胸前"]
    },
    {
      id: "jaguar",
      name: "美洲豹",
      latin: "Panthera onca",
      region: "南美洲",
      habitat: "热带雨林",
      diet: "肉食",
      status: "近危",
      statusLevel: "nt",
      featured: true,
      files: ["Junior-Jaguar-Belize-Zoo.jpg", "Panthera onca.jpg", "Jaguar walking.jpg"],
      summary: "美洲最强的猫科，咬合力足以咬穿龟壳和头骨。",
      story: "美洲豹沿河岸巡猎，既能游泳也能爬树。它们的斑点是玫瑰形，中心常有更小的点。完整的亚马孙河岸对它们至关重要——失去廊道，等于切断一只豹的一生。",
      facts: ["咬合力在猫科中极强", "擅长捕鱼与伏击", "玫瑰斑区别于花豹"]
    },
    {
      id: "sloth",
      name: "树懒",
      latin: "Bradypus variegatus",
      region: "南美洲",
      habitat: "雨林树冠",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: ["Bradypus variegatus.jpg", "Three-toed sloth.jpg", "Sloth in tree.jpg"],
      summary: "把生命节奏降到树叶生长的速度，毛发里甚至住着藻类。",
      story: "树懒一周可能只下树一次，为的是在地面排便。缓慢代谢让它们能靠低热量树叶生存。毛发沟壑里的藻类带来绿色伪装，也形成一座微型雨林。",
      facts: ["每周约下树一次", "毛发可共生藻类", "几乎终生倒挂"]
    },
    {
      id: "alpaca",
      name: "羊驼",
      latin: "Vicugna pacos",
      region: "南美洲",
      habitat: "高原草地",
      diet: "植食",
      status: "家养",
      statusLevel: "dom",
      files: ["Vicugna pacos.jpg", "Alpaca portrait.jpg", "Alpacas in Peru.jpg"],
      summary: "安第斯高原上的同伴动物，绒毛轻暖，表情永远像在思考人生。",
      story: "羊驼由美洲原住民驯化，用于产毛而非负重。它们以轻柔的脚步走过高海拔草场，对植被破坏较小。今天既是高原文化的一部分，也成为世界各地农场里的温和明星。",
      facts: ["绒毛细软保暖", "社群靠哼鸣交流", "原产安第斯山脉"]
    },
    {
      id: "macaw",
      name: "金刚鹦鹉",
      latin: "Ara macao",
      region: "南美洲",
      habitat: "雨林",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: ["Ara macao.jpg", "Scarlet Macaw.jpg", "Red-and-green macaw.jpg"],
      summary: "雨林里最响亮的颜色，成对飞行时像两支燃烧的箭。",
      story: "绯红金刚鹦鹉用强喙剖开坚果，成对终身相伴。粘土舔食场是它们补充矿物质的社交场所。宠物贸易曾经重创一些种群，野生个体更需要连片树冠。",
      facts: ["寿命可超 50 年", "成对活动", "喙能打开坚硬种子"]
    },
    {
      id: "capybara",
      name: "水豚",
      latin: "Hydrochoerus hydrochaeris",
      region: "南美洲",
      habitat: "湿地",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: ["Capybara (Hydrochoerus hydrochaeris).JPG", "Hydrochoerus hydrochaeris.jpg", "Capybara family.jpg"],
      summary: "世界最大的啮齿动物，半水栖，社交能力强到能和几乎所有动物和平共处。",
      story: "水豚眼、耳、鼻都长在头顶，适合只露出水面观察。它们成群在河岸啃草，遇到危险就滑入水中。温和的性格让它们成为南美湿地的“公共沙发”。",
      facts: ["体重可达 60 公斤以上", "趾间有蹼", "高度社群化"]
    },
    {
      id: "toucan",
      name: "巨嘴鸟",
      latin: "Ramphastos toco",
      region: "南美洲",
      habitat: "雨林林缘",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: ["Ramphastos toco.jpg", "Toco toucan.jpg", "Toucan bill.jpg"],
      summary: "巨大的喙其实很轻，既能取食也能帮助散热。",
      story: "托哥巨嘴鸟的喙由蜂窝状骨质支撑，看起来沉重，拿起来却出奇地轻。它们用喙尖精确地摘取果实，也偶尔吃昆虫和鸟卵。一张招牌大嘴，是雨林广告牌，也是体温调节器。",
      facts: ["喙可辅助散热", "主要以果实为食", "常见于南美林缘"]
    },
    {
      id: "kangaroo",
      name: "红袋鼠",
      latin: "Osphranter rufus",
      region: "大洋洲",
      habitat: "干旱草原",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      unsplash: ["photo-1578662996442-48f60103fc96"],
      files: ["Macropus rufus.jpg", "Red kangaroo.jpg", "Red kangaroo jumping.jpg"],
      summary: "用尾巴当第三条腿，跳跃是为了在干热大陆上高效移动。",
      story: "红袋鼠是澳大利亚内陆的象征。雌性育儿袋让幼崽在未发育完全时就能继续生长。干旱来临时，它们能延缓繁殖，把生命节奏交给降雨。",
      facts: ["一次跳跃可超 8 米", "尾巴可支撑身体", "澳洲体型最大的袋鼠"]
    },
    {
      id: "koala",
      name: "考拉",
      latin: "Phascolarctos cinereus",
      region: "大洋洲",
      habitat: "桉树林",
      diet: "植食",
      status: "易危",
      statusLevel: "vu",
      unsplash: ["photo-1459262838948-3e2de6c1ec80"],
      files: ["Koala climbing tree.jpg", "Phascolarctos cinereus.jpg", "Koala eating eucalyptus.jpg"],
      summary: "几乎只吃桉树叶，因此大部分时间都在睡觉以节省能量。",
      story: "考拉的肝脏能处理桉叶中的毒素，代价是极低的代谢。野火和栖息地破碎让它们变得更脆弱。一对绒耳和黑鼻子让人想拥抱，但野生个体需要的是连片的树廊。",
      facts: ["每天睡 18–20 小时", "指纹与人类相似", "幼崽要吃“育儿粪便”建立菌群"]
    },
    {
      id: "platypus",
      name: "鸭嘴兽",
      latin: "Ornithorhynchus anatinus",
      region: "大洋洲",
      habitat: "溪流",
      diet: "肉食",
      status: "近危",
      statusLevel: "nt",
      files: [
        "Platypus.jpg",
        "Duck-billed platypus (Ornithorhynchus anatinus) Scottsdale.jpg",
        "Duck-billed platypus (Ornithorhynchus anatinus) surfacing Scottsdale.jpg"
      ],
      summary: "卵生哺乳动物，喙能感知水中猎物的电场。",
      story: "当第一只鸭嘴兽标本送到欧洲，博物学家以为有人把鸭子和海狸缝在了一起。它产卵、泌乳、雄性踝部还有毒刺。澳大利亚东部的清澈溪流，是这种“不可能动物”最后的舞台。",
      facts: ["单孔目动物", "闭眼靠电感觉捕食", "雄性有毒距"]
    },
    {
      id: "emu",
      name: "鸸鹋",
      latin: "Dromaius novaehollandiae",
      region: "大洋洲",
      habitat: "疏林草原",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: ["Dromaius novaehollandiae.jpg", "Emu.jpg", "Emu portrait.jpg"],
      summary: "澳洲最高的鸟，不会飞，但奔跑起来能追上自行车。",
      story: "鸸鹋由雄鸟孵卵并带领幼雏。它们能长途行走寻找降雨后的新芽。国徽上与袋鼠并列，象征这个大陆上那些选择用双腿而非翅膀征服距离的生命。",
      facts: ["身高约 1.9 米", "雄鸟育幼", "奔跑时速可超 50 公里"]
    },
    {
      id: "wombat",
      name: "袋熊",
      latin: "Vombatus ursinus",
      region: "大洋洲",
      habitat: "林地 / 草原",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: ["Vombatus ursinus.jpg", "Common wombat.jpg", "Wombat.jpg"],
      summary: "方便便的挖掘专家，用软骨臀挡住追进洞穴的天敌。",
      story: "袋熊挖出的地道可以改变一处山坡的排水。立方体粪便帮助它们标记领地，不容易从石头上滚走。看起来圆钝，其实是为地下生活长出来的工程身体。",
      facts: ["粪便接近立方体", "臀部有防护软骨", "挖洞能改变地形"]
    },
    {
      id: "kookaburra",
      name: "笑翠鸟",
      latin: "Dacelo novaeguineae",
      region: "大洋洲",
      habitat: "疏林",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: ["Dacelo novaeguineae.jpg", "Laughing kookaburra.jpg", "Kookaburra.jpg"],
      summary: "黎明时分的大笑声，是澳洲灌木林的闹钟。",
      story: "笑翠鸟并不靠海里捕鱼为生，它们更常从枝头扑向蜥蜴、蛇和昆虫。家族会一起用笑声宣示领地。对旅行者来说，那是第一口澳洲早晨；对鸟自己，那是一份严肃的地契。",
      facts: ["以笑声宣示领地", "主食陆地小动物", "常成家族群居"]
    },
    {
      id: "polar-bear",
      name: "北极熊",
      latin: "Ursus maritimus",
      region: "极地海洋",
      habitat: "海冰",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      featured: true,
      unsplash: ["photo-1589656966895-2d91cc4e1d7b"],
      files: ["Polar Bear - Alaska.jpg", "Ursus maritimus.jpg", "Polar bear with cub.jpg"],
      summary: "海冰上的旅行者，命运与北极夏季冰面的存续绑在一起。",
      story: "北极熊大部分时间在海上度过，等待海豹从呼吸孔出现。毛发中空，皮肤却近乎黑色，为的是锁住每一分光和热。海冰提前融化，意味着更长的饥饿季节。",
      facts: ["最大的陆地食肉动物之一", "嗅觉可隔冰侦测海豹", "被毛下是黑色皮肤"]
    },
    {
      id: "penguin",
      name: "帝企鹅",
      latin: "Aptenodytes forsteri",
      region: "极地海洋",
      habitat: "南极海冰",
      diet: "肉食",
      status: "近危",
      statusLevel: "nt",
      featured: true,
      unsplash: ["photo-1551986782-d0169b3f8fa7"],
      files: ["Emperor Penguin Manchot empereur.jpg", "Aptenodytes forsteri.jpg", "Emperor penguins colony.jpg"],
      summary: "南极冬季由雄鸟孵卵，用身体围成旋转的保温圈。",
      story: "帝企鹅是体型最大的企鹅。雌鸟产卵后出海觅食，雄鸟把卵放在脚背上，盖着育儿袋熬过极夜。群体会缓慢轮转，让外侧的个体也能进入温暖中心。",
      facts: ["潜深可超 500 米", "雄鸟负责冬季孵卵", "身高约 1.2 米"]
    },
    {
      id: "blue-whale",
      name: "蓝鲸",
      latin: "Balaenoptera musculus",
      region: "极地海洋",
      habitat: "远洋",
      diet: "滤食",
      status: "濒危",
      statusLevel: "en",
      featured: true,
      unsplash: ["photo-1568430462989-44163eb1751f"],
      files: ["Blue whale.jpg", "Balaenoptera musculus.jpg", "Blue whale fluke.jpg"],
      summary: "地球上有记录以来最大的动物，一次吞咽就能过滤一整片磷虾云。",
      story: "蓝鲸的心脏有小汽车那么大，低频率歌声能穿越海洋盆地。商业捕鲸曾把它们推向崩溃，禁捕后部分种群缓慢回升。看见一道蓝灰色背脊出水，等于看见地球还愿意把最大的房间留给野生生命。",
      facts: ["体长可超 30 米", "主食磷虾", "歌声能传极远距离"]
    },
    {
      id: "dolphin",
      name: "宽吻海豚",
      latin: "Tursiops truncatus",
      region: "极地海洋",
      habitat: "近海",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      unsplash: ["photo-1607153333879-c174d265f1d2"],
      files: ["Tursiops truncatus 01.jpg", "Bottlenose dolphin.jpg", "Tursiops truncatus jumping.jpg"],
      summary: "会用名字哨音称呼同伴的海洋哺乳动物。",
      story: "宽吻海豚以回声定位猎鱼，也能合作把鱼群赶向浅滩。研究者记录到个体专属的哨音，类似名字。近岸水质、渔网和航运噪音，是它们最日常的威胁。",
      facts: ["使用回声定位", "高度社会性", "分布于全球温带与热带近海"]
    },
    {
      id: "turtle",
      name: "绿海龟",
      latin: "Chelonia mydas",
      region: "极地海洋",
      habitat: "珊瑚海 / 沙滩",
      diet: "植食为主",
      status: "濒危",
      statusLevel: "en",
      unsplash: ["photo-1437622368342-7a3d73a34c8f"],
      files: ["Chelonia mydas is going for the air.jpg", "Green turtle swimming.jpg", "Chelonia mydas.jpg"],
      summary: "穿越整个大洋去产卵的古老航海者，出生海滩往往就是回归地。",
      story: "雌性绿海龟会回到自己出生的沙滩挖坑产卵。幼龟破壳后凭借月光走向海浪，路上充满天敌。保护灯光管制和减少塑料，是把航线还给它们的最小动作。",
      facts: ["迁徙可跨数千公里", "成体主要吃海草", "温度决定幼体性别"]
    },
    {
      id: "shark",
      name: "大白鲨",
      latin: "Carcharodon carcharias",
      region: "极地海洋",
      habitat: "大陆架海域",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      unsplash: ["photo-1560275619-4cc5fa59d10b"],
      files: ["Carcharodon carcharias.jpg", "Great white shark south africa.jpg", "Great white shark.jpg"],
      summary: "海洋食物网的修剪者，感官能察觉远处一滴血的化学信号。",
      story: "大白鲨并非电影里的复仇机器。它们追踪海豹集群，也会长途迁徙到开阔大洋。失去鲨鱼，意味着中层鱼类和生态系统失衡。害怕它们很容易，理解它们更难，也更必要。",
      facts: ["能感应电场", "牙齿可终身替换", "部分个体跨洋迁徙"]
    },
    {
      id: "orca",
      name: "虎鲸",
      latin: "Orcinus orca",
      region: "极地海洋",
      habitat: "沿岸 / 远洋",
      diet: "肉食",
      status: "数据缺乏",
      statusLevel: "dd",
      files: ["Orcinus orca.jpg", "Killer whale.jpg", "Killer Whales Hunting a Seal.jpg"],
      summary: "海洋里最复杂的家族猎手，不同种群有不同的口音和食谱。",
      story: "虎鲸不是一种单一的生活方式：有的专吃鱼，有的协作冲上岸捕海豹。母系家族分享叫声传统，像带着方言的航海部落。它们提醒我们，智慧不必长成人类的样子。",
      facts: ["母系社群", "不同生态型食谱不同", "分布几乎遍及全球海洋"]
    },
    {
      id: "walrus",
      name: "海象",
      latin: "Odobenus rosmarus",
      region: "极地海洋",
      habitat: "北极浮冰",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      files: ["Odobenus rosmarus.jpg", "Walrus.jpg", "Walrus colony.jpg"],
      summary: "用长牙攀上冰块，用触须在海底摸蛤蜊。",
      story: "海象的长牙是特化的犬齿，既能破冰，也能在拥挤的栖息地里确立位置。它们依赖海冰作为休息平台。冰面变少时，成千上万头挤上同一片岸，是北极正在变热的直观画面。",
      facts: ["长牙为特化犬齿", "触须用于海底觅食", "高度依赖海冰"]
    },
    {
      id: "manta",
      name: "双吻前口蝠鲼",
      latin: "Mobula birostris",
      region: "极地海洋",
      habitat: "热带远洋",
      diet: "滤食",
      status: "濒危",
      statusLevel: "en",
      files: ["Manta birostris.jpg", "Giant manta ray.jpg", "Manta ray underwater.jpg"],
      summary: "展开像一只会飞的地毯，脑容量在鱼类里出奇地大。",
      story: "巨型蝠鲼用头鳍把浮游生物导入口腔，翻滚、跃出水面，像在写一首慢动作的诗。它们会反复造访清洁站，也因此容易被观光和渔网同时找到。一张翅膀的阴影扫过礁盘，是热带海洋还健康的信号。",
      facts: ["体盘宽可超 7 米", "滤食浮游生物", "具有较复杂的行为"]
    },
    {
      id: "wildebeest",
      name: "蓝角马",
      latin: "Connochaetes taurinus",
      region: "非洲",
      habitat: "稀树草原",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Connochaetes taurinus.jpg",
        "Blue Wildebeest, Ngorongoro.jpg",
        "083 Blue wildebeest dust bathing in the Kalahari Desert of Namibia Photo by Giles Laurent.jpg"
      ],
      summary: "塞伦盖蒂大迁徙的主力，成群渡河时几乎改写整条河谷。",
      story: "蓝角马追随雨季新生的青草，和斑马一起走出地球上规模最大的陆生迁徙之一。鳄鱼等待的渡口很危险，但停下来意味着饥荒。一头角马的选择，其实是百万只蹄子共同写就的气候地图。",
      facts: ["年度迁徙可超 1000 公里", "幼崽出生后很快能奔跑", "与斑马常结伴而行"]
    },
    {
      id: "hyena",
      name: "斑鬣狗",
      latin: "Crocuta crocuta",
      region: "非洲",
      habitat: "草原 / 疏林",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: ["Crocuta crocuta.jpg", "Spotted hyena.jpg", "Spotted hyena (Crocuta crocuta).jpg"],
      summary: "笑声是社群信号，而不是卡通里的反派配乐。",
      story: "斑鬣狗以母系氏族生活，咬合力强到能拆开大型猎物的骨头。它们既会自己狩猎，也会利用狮群剩下的部分。夜色里的谁谁谁，其实是非洲草原最高效的回收系统之一。",
      facts: ["母系等级分明", "咬合力极强", "能消化骨头"]
    },
    {
      id: "baboon",
      name: "橄榄狒狒",
      latin: "Papio anubis",
      region: "非洲",
      habitat: "疏林 / 岩地",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: ["Papio anubis.jpg", "Olive baboon.jpg", "Olive baboon (Papio anubis) with juvenile.jpg"],
      summary: "会读懂彼此表情的地面灵长类，家族队伍常常绵延整座岩丘。",
      story: "橄榄狒狒用复杂的理毛、对视和叫声维持联盟。雄性有犬齿，却把更多精力花在保护幼崽和协调行进。它们提醒人们：社会能力并不只长在树上。",
      facts: ["高度社会化", "杂食适应力强", "分布跨东非到中非"]
    },
    {
      id: "bactrian-camel",
      name: "双峰驼",
      latin: "Camelus bactrianus",
      region: "亚洲",
      habitat: "荒漠 / 戈壁",
      diet: "植食",
      status: "家养",
      statusLevel: "dom",
      files: ["Camelus bactrianus.jpg", "Bactrian camel.jpg", "Double humped Camel..jpg"],
      summary: "两座肉峰是移动水库，能走过夏天的戈壁和冬天的暴风雪。",
      story: "双峰驼原产中亚，厚密的被毛冬天御寒，夏天又大片脱落。驼峰储存脂肪而非清水，却让它们在稀疏植被间坚持更久。丝绸之路上的铃声，有很大一部分是这种动物的脚步。",
      facts: ["驼峰储存脂肪", "可忍长期缺水", "适应极端温差"]
    },
    {
      id: "sika",
      name: "梅花鹿",
      latin: "Cervus nippon",
      region: "亚洲",
      habitat: "林缘 / 草地",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: ["Nara deer.jpg", "Cervus nippon 002.jpg", "Sika Deer, Nara, Japan, 20240819 1541 4775.jpg"],
      summary: "夏天一身白斑像落进草丛的梅花，是东亚最熟悉的中型鹿。",
      story: "梅花鹿随季节换装：夏毛红褐带斑，冬毛转为灰褐。在奈良和中国的一些园林里，它们学会了与人共处；在真正的山林中，它们仍是虎和豹的重要猎物。",
      facts: ["夏毛有明显白斑", "雄性每年换角", "原产东亚"]
    },
    {
      id: "golden-eagle",
      name: "金雕",
      latin: "Aquila chrysaetos",
      region: "亚洲",
      habitat: "山地 / 草原",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: ["Aquila chrysaetos.jpg", "Golden Eagle.jpg", "Steinadler.jpg"],
      summary: "开阔山地的王者猛禽，金色后颈在逆光里像一圈火焰。",
      story: "金雕用上升气流巡航，俯冲时足以捕捉兔、狐甚至幼羊。它们的巢筑在悬崖，一对配偶会多年沿用。从阿尔泰山到苏格兰高地，看见金雕，等于看见这片天空还没被电线占满。",
      facts: ["翼展可超 2 米", "视力极为敏锐", "分布横跨北半球山地"]
    },
    {
      id: "arctic-fox",
      name: "北极狐",
      latin: "Vulpes lagopus",
      region: "欧洲",
      habitat: "苔原",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: ["Arctic fox.jpg", "ArcticFoxSummer.jpg", "Vulpes lagopus in Iceland.jpg"],
      summary: "冬天变成一团白雪，夏天又换上褐色工作服。",
      story: "北极狐的换毛是一份精确的季节日历。圆耳朵、短吻和多毛脚掌把热量锁在体内。旅鼠丰年时它们大量繁殖，歉年则跟随北极熊的足迹捡食。气候变暖让白色伪装提前失效。",
      facts: ["冬季白化夏褐", "脚掌有保温毛", "跟随食物丰度波动"]
    },
    {
      id: "harbor-seal",
      name: "港海豹",
      latin: "Phoca vitulina",
      region: "北美洲",
      habitat: "近岸 / 岩礁",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: ["Phoca vitulina.jpg", "Harbor seal.jpg", "Common seal.jpg"],
      summary: "潮间带上的斑点观测者，退潮时整片岩石都会变成休息室。",
      story: "港海豹用敏感的胡须感知水中鱼群，也能在河口和港口生活。幼崽出生后很快就能随母兽入水。船只、渔网和近岸开发，是这种“看起来很亲近”的海洋哺乳动物真正的压力。",
      facts: ["分布最广的海豹之一", "幼崽很快能游泳", "依赖安静的休息滩"]
    },
    {
      id: "hummingbird",
      name: "红喉北蜂鸟",
      latin: "Archilochus colubris",
      region: "北美洲",
      habitat: "花园 / 林缘",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: ["Archilochus colubris.jpg", "Ruby-throated hummingbird.jpg", "Ruby-Throated Hummingbird.png"],
      summary: "能悬停和倒飞的微型发动机，翅膀每秒可扇动数十次。",
      story: "红喉北蜂鸟靠花蜜补充瞬时能量，也吃小昆虫补充蛋白质。雄鸟喉羽在光线合适时会突然变成宝石红。一场跨越墨西哥湾的迁徙，对这样轻的身体来说几乎像一次赌博。",
      facts: ["可悬停与倒飞", "代谢极高", "雄鸟喉部呈宝石红"]
    },
    {
      id: "anaconda",
      name: "绿森蚺",
      latin: "Eunectes murinus",
      region: "南美洲",
      habitat: "沼泽 / 河流",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: ["Eunectes murinus.jpg", "Green-anaconda.jpg", "Anaconda in water.jpg"],
      summary: "世界上最重的蛇之一，把大部分时间交给温暖的水面。",
      story: "绿森蚺善于游泳和埋伏，用身体缠绕使猎物无法呼吸。它们不是童话里的吞人机器，而是湿地食物网里的大型约束者。水位、鱼类和岸边植被，决定一条森蚺能活多久。",
      facts: ["体重可超 200 公斤", "半水栖", "以缠绕方式捕食"]
    },
    {
      id: "octopus",
      name: "普通章鱼",
      latin: "Octopus vulgaris",
      region: "极地海洋",
      habitat: "岩礁 / 海床",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: ["Octopus vulgaris.jpg", "Common octopus.jpg", "Octopus.jpg"],
      summary: "八条手臂上都有自己的“小脑”，还能瞬间改写皮肤的颜色和质地。",
      story: "普通章鱼会开罐子、模仿岩石、把椰子壳当活动房屋。寿命往往只有一两年，却把智力用在每一次狩猎和每一次逃生上。看见一只章鱼从瓶口挤出来，等于看见柔软也可以是一种武器。",
      facts: ["三颗心脏", "会使用简单工具", "皮肤可快速变色"]
    },
    {
      id: "albatross",
      name: "漂泊信天翁",
      latin: "Diomedea exulans",
      region: "极地海洋",
      habitat: "南大洋",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Diomedea exulans - SE Tasmania.jpg",
        "Diomedea exulans in flight - SE Tasmania.jpg",
        "Snowy Albatross 0A2A8292.jpg"
      ],
      summary: "翼展可超过三米，几乎把一生都交给南半球的西风带。",
      story: "漂泊信天翁利用动态滑翔，可以连续飞行数小时却几乎不扇翅膀。它们在偏远海岛上成对繁殖，一巢一卵，周期很长。延绳钓误捕曾让许多个体回不了岛。一双巨大的翅膀，需要一整片干净的海。",
      facts: ["翼展可超 3 米", "寿命可超过 50 年", "成对长期相伴"]
    },
    {
      id: "wild-dog",
      name: "非洲野犬",
      latin: "Lycaon pictus",
      region: "非洲",
      habitat: "稀树草原",
      diet: "肉食",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Lycaon pictus.jpg",
        "African wild dog.jpg",
        "Lycaon pictus - Etosha 2015.jpg"
      ],
      summary: "彩色马赛克般的皮毛，以高度协作的长距离围猎闻名。",
      story: "非洲野犬几乎从不断骨。它们靠耐力把猎物拖垮，再把肉带回给幼崽和留守的同伴。每一头的斑块图案都不同，像随手泼上的颜料。栖息地碎片化让这种高效猎手比狮子更少被看见。",
      facts: [
        "一窝可超 10 只幼崽",
        "几乎从不攻击人类",
        "围猎成功率高于狮群"
      ]
    },
    {
      id: "okapi",
      name: "㺢㹢狓",
      latin: "Okapia johnstoni",
      region: "非洲",
      habitat: "刚果雨林",
      diet: "植食",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Okapia johnstoni1.jpg",
        "Okapi.jpg",
        "Okapia johnstoni.jpg"
      ],
      summary: "长颈鹿的森林亲戚，后腿却穿着斑马的条纹袜。",
      story: "㺢㹢狓在浓密雨林里几乎隐形。长舌能把树叶卷进嘴里，也能把自己的耳朵舔干净。西方科学很晚才确认它的存在，当地猎人却早就认识这种“森林长颈鹿”。",
      facts: [
        "舌头可超 35 厘米",
        "仅分布于刚果盆地",
        "雌性略大于雄性"
      ]
    },
    {
      id: "secretarybird",
      name: "蛇鹫",
      latin: "Sagittarius serpentarius",
      region: "非洲",
      habitat: "开阔草原",
      diet: "肉食",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Sagittarius serpentarius.jpg",
        "Secretary bird.jpg",
        "Secretarybird walking.jpg"
      ],
      summary: "踩着长腿巡视草原的猛禽，会用脚把蛇踩晕。",
      story: "蛇鹫大部分时间在地面行走，头上的黑羽像别在耳后的羽毛笔。它们用有力的踢击对付蛇、蜥蜴和小型哺乳动物。一对配偶会共用一个巨大的树冠巢。",
      facts: [
        "腿长接近 1.3 米",
        "能踩死毒蛇",
        "在地面狩猎为主"
      ]
    },
    {
      id: "mandrill",
      name: "山魈",
      latin: "Mandrillus sphinx",
      region: "非洲",
      habitat: "热带雨林",
      diet: "杂食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Mandrill at the San Francisco Zoo.jpg",
        "Mandrillus sphinx.jpg",
        "Mandrill portrait.jpg"
      ],
      summary: "脸上涂着蓝与朱红的雨林灵长类，雄性颜色越艳地位越高。",
      story: "山魈的脸不是装饰，而是一份公开的健康报告。优势雄性鼻梁更蓝、臀部更红，也更容易获得交配权。它们在森林地面翻找果实、昆虫和小型脊椎动物。",
      facts: [
        "世界上最大的猴类之一",
        "雄性犬齿很长",
        "社群可达数百只"
      ]
    },
    {
      id: "chimpanzee",
      name: "黑猩猩",
      latin: "Pan troglodytes",
      region: "非洲",
      habitat: "热带森林",
      diet: "杂食",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Chimpanzee-02.jpg",
        "Pan troglodytes.jpg",
        "Common chimpanzee.jpg"
      ],
      summary: "会用树枝钓白蚁的近亲，社群政治比看起来复杂得多。",
      story: "黑猩猩会拥抱、争斗、和解，也会把石头当锤子砸开坚果。不同群落有不同的“文化传统”。看见一只猩猩把叶子当海绵蘸水，等于看见工具并不只属于人类。",
      facts: [
        "共享约 98% 人类基因",
        "会制作简单工具",
        "雄性常组成巡逻队"
      ]
    },
    {
      id: "nile-crocodile",
      name: "尼罗鳄",
      latin: "Crocodylus niloticus",
      region: "非洲",
      habitat: "河流 / 湖泊",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Crocodylus niloticus 2.jpg",
        "Nile crocodile.jpg",
        "Nile crocodile basking.jpg"
      ],
      summary: "非洲淡水里最强的伏击者，常在饮水点只露出眼睛。",
      story: "尼罗鳄能把角马拖进漩涡，也能用嘴轻轻运送刚孵出的幼鳄。它们在阳光下张开大嘴散热，夜里则变成几乎看不见的暗影。一条河是否安全，有时取决于岸边那双眼睛在不在。",
      facts: [
        "体长可超 5 米",
        "咬合力极强",
        "雌性守护巢穴"
      ]
    },
    {
      id: "serval",
      name: "薮猫",
      latin: "Leptailurus serval",
      region: "非洲",
      habitat: "高草草原",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Leptailurus serval.jpg",
        "Serval.jpg",
        "Serval cat.jpg"
      ],
      summary: "腿特别长的中型猫科，能在草丛里垂直起跳抓鸟。",
      story: "薮猫的耳朵像两座雷达站，能听见草根下老鼠的脚步。一次跳跃可以高出两米，把躲在高草里的猎物打到空中。细长的身体让它们看起来像被拉长的家猫。",
      facts: [
        "后腿特别长",
        "一次跳跃可超 2 米",
        "主要以啮齿类为食"
      ]
    },
    {
      id: "caracal",
      name: "狞猫",
      latin: "Caracal caracal",
      region: "非洲",
      habitat: "干旱灌丛",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Caracal (Caracal caracal) 2.jpg",
        "Caracal caracal.jpg",
        "Caracal portrait.jpg"
      ],
      summary: "耳尖耸着黑簇毛，能在半空中连续拍下飞鸟。",
      story: "狞猫的弹跳像一张被松开的弓。它们常在黄昏出没，捕鸟、捕兔，也敢挑战比自己更大的猎物。金色皮毛让它们融化在干燥的草坡上。",
      facts: [
        "能在空中连拍数只鸟",
        "夜行性较强",
        "分布跨非洲到南亚"
      ]
    },
    {
      id: "aardvark",
      name: "土豚",
      latin: "Orycteropus afer",
      region: "非洲",
      habitat: "草原 / 疏林",
      diet: "食虫",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Aardvark2.jpg",
        "Orycteropus afer.jpg",
        "Aardvark.jpg"
      ],
      summary: "夜里用管状鼻子和黏舌清空一座蚁丘。",
      story: "土豚的耳朵像驴，鼻子像猪，舌头却是为蚂蚁准备的。一夜之间它们可以挖开数座蚁巢，再换一个洞穴睡觉。许多草原动物会借用土豚挖好的洞躲雨或逃生。",
      facts: [
        "一夜可吃数万只蚁",
        "单独夜行",
        "洞穴会被别的动物借用"
      ]
    },
    {
      id: "gemsbok",
      name: "南非剑羚",
      latin: "Oryx gazella",
      region: "非洲",
      habitat: "干旱草原",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Gemsbok (Oryx gazella) male.jpg",
        "Oryx gazella.jpg",
        "Gemsbok etosha.jpg"
      ],
      summary: "两支长角几乎笔直，能在几乎无水的沙漠里站稳。",
      story: "剑羚靠提高体温和浓缩尿液节省水分，因此能穿过纳米布的热浪。雌雄都有长角，对峙时像两支交叉的长矛。看见一群剑羚逆光站着，草原会突然变得像一幅版画。",
      facts: [
        "角长可超 80 厘米",
        "极耐干旱",
        "能从植物中取水"
      ]
    },
    {
      id: "impala",
      name: "黑斑羚",
      latin: "Aepyceros melampus",
      region: "非洲",
      habitat: "疏林草原",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Impala (Aepyceros melampus).jpg",
        "Aepyceros melampus.jpg",
        "Male impala.jpg"
      ],
      summary: "受惊时会连续弹跳，像在草地上画出一串括号。",
      story: "黑斑羚是狮、豹、野犬都认识的“日常菜单”，因此进化出了惊人的弹跳和警戒。雄性在繁殖季用角争夺领地，雌性则带着幼崽贴着林地边缘活动。",
      facts: [
        "一跳可跨越 10 米",
        "警戒声很尖",
        "是许多捕食者的主要猎物"
      ]
    },
    {
      id: "african-buffalo",
      name: "非洲水牛",
      latin: "Syncerus caffer",
      region: "非洲",
      habitat: "草原 / 湿地",
      diet: "植食",
      status: "近危",
      statusLevel: "nt",
      files: [
        "African buffalo (Syncerus caffer caffer) male.jpg",
        "Syncerus caffer.jpg",
        "Cape buffalo.jpg"
      ],
      summary: "弯角连成头盔的大型牛科，狮群也要掂量再动手。",
      story: "非洲水牛常被称作草原上最不好惹的植食者。它们会集体反击，甚至把狮子顶开。泥浆浴既降温也驱虫。一群水牛走过，地面会留下深深的蹄印和湿润的气息。",
      facts: [
        "角基愈合成“盔甲”",
        "社群合作防御",
        "对栖息地水源依赖高"
      ]
    },
    {
      id: "warthog",
      name: "疣猪",
      latin: "Phacochoerus africanus",
      region: "非洲",
      habitat: "草原",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Warthog, Kruger.jpg",
        "Phacochoerus africanus.jpg",
        "Common warthog.jpg"
      ],
      summary: "跪下来用门齿刨根，遇险时倒着退进洞穴。",
      story: "疣猪脸上的疣状突起能减轻争斗时的撞击。它们喜欢跪着吃草，尾巴竖起像一面小旗。进洞时常常屁股朝里，门牙朝外，以便突然冲出去吓人。",
      facts: [
        "会跪地觅食",
        "借用土豚的洞穴",
        "奔跑时速可超 50 公里"
      ]
    },
    {
      id: "crowned-crane",
      name: "灰冕鹤",
      latin: "Balearica regulorum",
      region: "非洲",
      habitat: "湿地 / 草原",
      diet: "杂食",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Balearica regulorum1.jpg",
        "Grey crowned crane.jpg",
        "Crowned crane dancing.jpg"
      ],
      summary: "头上顶着金色皇冠，求偶时会鞠躬、跳跃、展翅。",
      story: "灰冕鹤是少数能栖息在树上的鹤。金色冠羽让它们远远就能被认出来。湿地被开垦成农田后，这种会跳舞的鸟越来越难找到安静的繁殖地。",
      facts: [
        "能在树上栖息",
        "求偶有复杂舞蹈",
        "依赖浅水湿地"
      ]
    },
    {
      id: "ostrich",
      name: "鸵鸟",
      latin: "Struthio camelus",
      region: "非洲",
      habitat: "干旱草原",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Somali ostrich.jpg",
        "Struthio camelus.jpg",
        "Common ostrich.jpg"
      ],
      summary: "现存最重的鸟，翅膀不能飞，却能把腿变成武器。",
      story: "鸵鸟把脑袋埋进沙子是误解，它们其实在检查地面的巢。雄鸟的吼声低沉，雌鸟的羽毛更利于伪装。一枚鸵鸟蛋可以让好几个人吃饱，也因此需要被小心看护。",
      facts: [
        "身高可超 2.5 米",
        "奔跑可超 70 公里/小时",
        "一踢能击退中型捕食者"
      ]
    },
    {
      id: "shoebill",
      name: "鲸头鹳",
      latin: "Balaeniceps rex",
      region: "非洲",
      habitat: "纸莎草沼泽",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Shoebill at Ueno Zoo.jpg",
        "Balaeniceps rex.jpg",
        "Shoebill stork.jpg"
      ],
      summary: "鞋盒一样的巨喙，能把肺鱼从泥水里钳出来。",
      story: "鲸头鹳常常一动不动站很久，突然才把喙砸进水里。那张看起来史前的脸，其实是为沼泽伏击准备的工具。纸莎草湿地一旦被排干，这种大鸟就无处可站。",
      facts: [
        "喙宽像一只鞋",
        "主要以鱼为食",
        "繁殖率很低"
      ]
    },
    {
      id: "fennec",
      name: "耳廓狐",
      latin: "Vulpes zerda",
      region: "非洲",
      habitat: "沙漠",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Fennec Fox.jpg",
        "Vulpes zerda.jpg",
        "Fennec fox portrait.jpg"
      ],
      summary: "世界上耳朵最大的狐狸，靠散热在撒哈拉活下来。",
      story: "耳廓狐的耳朵不仅能听沙下甲虫的动静，也能把热散掉。厚密的足毛让它们走在白天的沙子上不至于烫伤。夜里，这对大耳朵会在月光下变成两片半透明的叶子。",
      facts: [
        "耳长可接近 15 厘米",
        "夜行挖洞",
        "几乎不需要饮水"
      ]
    },
    {
      id: "ring-tailed-lemur",
      name: "环尾狐猴",
      latin: "Lemur catta",
      region: "非洲",
      habitat: "干旱林 / 灌丛",
      diet: "植食为主",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Lemur catta 001.jpg",
        "Ring-tailed lemur.jpg",
        "Lemur catta sunbathing.jpg"
      ],
      summary: "马达加斯加的条纹尾巴旗帜，晒太阳时像在做集体瑜伽。",
      story: "环尾狐猴用竖起的尾巴在灌丛里互相报位置。清晨它们会敞开胸膛晒太阳，补充一夜的凉意。雌性主导社群，这在灵长类里并不常见。森林被砍成农田后，它们的队伍越来越短。",
      facts: [
        "尾巴有 13 道以上环纹",
        "雌性主导",
        "仅分布于马达加斯加"
      ]
    },
    {
      id: "indian-rhino",
      name: "印度犀",
      latin: "Rhinoceros unicornis",
      region: "亚洲",
      habitat: "冲积平原 / 草原",
      diet: "植食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Indian rhinoceros.jpg",
        "Rhinoceros unicornis.jpg",
        "Greater one-horned rhinoceros.jpg"
      ],
      summary: "身上像穿着一副铠甲，只在鼻梁上竖着一只角。",
      story: "印度犀的皮肤褶皱让它看起来像一件活动的盔甲。它们喜欢在泥塘里打滚，以避开蚊虫和暑热。保护工作让它们从更危险的边缘回升，但仍挤在几片河岸栖息地里。",
      facts: [
        "单角",
        "皮肤有明显褶皱",
        "主要分布于印度与尼泊尔"
      ]
    },
    {
      id: "komodo",
      name: "科莫多巨蜥",
      latin: "Varanus komodoensis",
      region: "亚洲",
      habitat: "干燥疏林",
      diet: "肉食",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Komodo dragon (Varanus komodoensis).jpg",
        "Varanus komodoensis.jpg",
        "Komodo dragon.jpg"
      ],
      summary: "世界上最大的蜥蜴，一口咬伤就能让猎物慢慢失去力气。",
      story: "科莫多巨蜥靠伏击和有毒的唾液成分让大型猎物失血虚弱。它们会游泳到邻近小岛，也会吃腐肉。游客眼里的“龙”，对本地鹿和野猪来说是必须绕开的阴影。",
      facts: [
        "体长可超 3 米",
        "会游泳",
        "仅分布于印尼部分岛屿"
      ]
    },
    {
      id: "proboscis-monkey",
      name: "长鼻猴",
      latin: "Nasalis larvatus",
      region: "亚洲",
      habitat: "红树林 / 河岸林",
      diet: "植食",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Proboscis monkey (Nasalis larvatus) male.jpg",
        "Nasalis larvatus.jpg",
        "Proboscis monkey.jpg"
      ],
      summary: "雄性挂着一只可以当共鸣箱的大鼻子，也是游泳好手。",
      story: "长鼻猴的鼻子越大，叫声越响，对雌性也越有吸引力。它们在河岸林和红树林间跳跃，落水也不慌。红树林被改成虾塘后，这种滑稽又珍贵的面孔越来越少。",
      facts: [
        "雄性鼻可下垂过嘴",
        "擅长游泳",
        "仅分布于婆罗洲"
      ]
    },
    {
      id: "malayan-tapir",
      name: "马来貘",
      latin: "Tapirus indicus",
      region: "亚洲",
      habitat: "热带雨林",
      diet: "植食",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Malayan tapir.jpg",
        "Tapirus indicus.jpg",
        "Malayan tapir face.jpg"
      ],
      summary: "黑白两截的“活化石”，夜里在雨林里像一块移动的拼图。",
      story: "马来貘的颜色不是为了好看，而是为了在月光斑驳的林下打断轮廓。它们用灵活的短鼻翻找嫩叶和果实。公路和棕榈园把连续的森林切成岛屿，貘就只能在夹缝里走路。",
      facts: [
        "亚洲唯一的貘",
        "幼体有条纹和斑点",
        "夜行性较强"
      ]
    },
    {
      id: "clouded-leopard",
      name: "云豹",
      latin: "Neofelis nebulosa",
      region: "亚洲",
      habitat: "热带 / 亚热带森林",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Clouded leopard.jpg",
        "Neofelis nebulosa.jpg",
        "Clouded leopard portrait.jpg"
      ],
      summary: "云状斑纹的树栖猫科，犬齿在比例上长得惊人。",
      story: "云豹能头朝下爬树，脚踝灵活得像在林冠走钢丝。巨大的犬齿让它能对付中型有蹄类。因为太会隐藏，野外摄影师常常只拍到一段花尾巴。",
      facts: [
        "犬齿相对体型很长",
        "极善于爬树",
        "分布从喜马拉雅到东南亚"
      ]
    },
    {
      id: "japanese-macaque",
      name: "日本猕猴",
      latin: "Macaca fuscata",
      region: "亚洲",
      habitat: "山地森林 / 温泉",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Macaca fuscata fuscata1.jpg",
        "Japanese macaque.jpg",
        "Snow monkey onsen.jpg"
      ],
      summary: "会泡温泉的雪猴，也是分布最北的非人灵长类。",
      story: "日本猕猴在冬天把身体沉进温泉，只露出通红的脸。它们会洗红薯、扔雪球，不同群体有不同习惯。一张泡汤的照片背后，是对严寒和社群秩序的适应。",
      facts: [
        "最北的野生猴类",
        "会使用温泉",
        "有明显的群体文化"
      ]
    },
    {
      id: "binturong",
      name: "熊狸",
      latin: "Arctictis binturong",
      region: "亚洲",
      habitat: "热带雨林",
      diet: "杂食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Binturong (Arctictis binturong).jpg",
        "Arctictis binturong.jpg",
        "Binturong.jpg"
      ],
      summary: "长着能抓树枝的尾巴，气味却像一袋爆米花。",
      story: "熊狸用缠尾在树冠间移动，吃果实也吃小动物。它们的气味腺散发出类似奶油爆米花的味道，是在树林里留下的化学签名。失去高大乔木后，这种行动缓慢的夜行者很难换地方。",
      facts: [
        "具缠绕尾",
        "气味像爆米花",
        "帮助传播榕树种子"
      ]
    },
    {
      id: "saiga",
      name: "高鼻羚羊",
      latin: "Saiga tatarica",
      region: "亚洲",
      habitat: "草原 / 半荒漠",
      diet: "植食",
      status: "近危",
      statusLevel: "nt",
      files: [
        "Saiga tatarica.jpg",
        "Saiga antelope.jpg",
        "Saiga male.jpg"
      ],
      summary: "鼓起的鼻子像一只过滤器，能应付草原上的沙尘和寒气。",
      story: "高鼻羚羊的鼻子在夏天滤尘，冬天预热空气。迁徙季节，土黄色的队伍会把整片草原染成流动的影子。疾病、偷猎和围栏曾让它们在短时间里大量消失。",
      facts: [
        "鼻子可过滤沙尘",
        "曾经历剧烈数量波动",
        "雄性有半透明的角"
      ]
    },
    {
      id: "markhor",
      name: "捻角山羊",
      latin: "Capra falconeri",
      region: "亚洲",
      habitat: "干燥山地",
      diet: "植食",
      status: "近危",
      statusLevel: "nt",
      files: [
        "Capra falconeri.jpg",
        "Markhor.jpg",
        "Markhor male.jpg"
      ],
      summary: "螺旋角像两根拧紧的麻花，站在悬崖上像一尊雕塑。",
      story: "捻角山羊在中亚的岩石山上寻找稀疏灌木。雄性的螺旋角是地位的展示，也是摄影师最想对准的线条。社区保护让一些种群回升，证明盗猎并不是唯一结局。",
      facts: [
        "角呈明显螺旋",
        "善于攀岩",
        "巴基斯坦等地的旗舰物种"
      ]
    },
    {
      id: "gharial",
      name: "恒河鳄",
      latin: "Gavialis gangeticus",
      region: "亚洲",
      habitat: "大型河流",
      diet: "肉食",
      status: "极危",
      statusLevel: "cr",
      files: [
        "Gharial (Gavialis gangeticus) male.jpg",
        "Gavialis gangeticus.jpg",
        "Gharial.jpg"
      ],
      summary: "细长的吻部像一把夹鱼钳，雄性鼻尖还顶着一只土罐。",
      story: "恒河鳄几乎只吃鱼，那张过分细长的嘴不适合撕咬大型哺乳动物。雄性鼻端的“罐状”突起能让求偶叫声更响。水坝、渔网和沙滩被占用，让这种河神般的爬行动物只剩几个繁殖点。",
      facts: [
        "吻部极度细长",
        "雄性鼻端有球状突起",
        "依赖不受干扰的沙洲"
      ]
    },
    {
      id: "king-cobra",
      name: "眼镜王蛇",
      latin: "Ophiophagus hannah",
      region: "亚洲",
      habitat: "森林",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Ophiophagus hannah 2.jpg",
        "King cobra.jpg",
        "Ophiophagus hannah.jpg"
      ],
      summary: "世界上最长的毒蛇，会发出低沉的“咕噜”警告。",
      story: "眼镜王蛇主要吃其他蛇，包括眼镜蛇。受惊时会把身体前段竖起，发出不同于嘶嘶的低鸣。雌性会堆起树叶巢守护卵，这在蛇类里很少见。",
      facts: [
        "体长可超 5 米",
        "主要以蛇为食",
        "会筑巢护卵"
      ]
    },
    {
      id: "slow-loris",
      name: "懒猴",
      latin: "Nycticebus coucang",
      region: "亚洲",
      habitat: "热带森林",
      diet: "杂食",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Sunda Slow Loris (Nycticebus coucang).jpg",
        "Nycticebus coucang.jpg",
        "Slow loris.jpg"
      ],
      summary: "行动慢，却是少数具有毒性的灵长类。",
      story: "懒猴用舌头舔肘部的毒腺，再把毒涂到牙齿上。圆眼睛适合夜视，却让它们成了宠物贸易的目标。被强行剪牙的个体，往往回不了森林。",
      facts: [
        "具毒性唾液",
        "完全树栖夜行",
        "宠物贸易是主要威胁"
      ]
    },
    {
      id: "stellers-sea-eagle",
      name: "虎头海雕",
      latin: "Haliaeetus pelagicus",
      region: "亚洲",
      habitat: "海岸 / 河口",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Stellers sea-eagle.jpg",
        "Haliaeetus pelagicus.jpg",
        "Steller's sea eagle.jpg"
      ],
      summary: "喙和体型都大得过分的海雕，冬天会沿着流冰找鱼。",
      story: "虎头海雕站在流冰上时，像一尊镶了金边的雕塑。巨大的黄色喙能撕开鲑鱼。它们在俄远东繁殖，冬季南下到北海道的渔村附近，也把人类的渔获算进菜单。",
      facts: [
        "世界上最重的雕之一",
        "冬季常出现在流冰区",
        "以鱼为主食"
      ]
    },
    {
      id: "yak",
      name: "牦牛",
      latin: "Bos mutus",
      region: "亚洲",
      habitat: "高原草地",
      diet: "植食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Wild yak (Bos mutus).jpg",
        "Bos mutus.jpg",
        "Yak on plateau.jpg"
      ],
      summary: "青藏高原的黑色引擎，野牦牛比家牦牛大得多也猛得多。",
      story: "野牦牛用厚密的裙状长毛对抗高海拔寒风。它们能在氧气稀薄的草甸上刨雪找食。家牦牛改变了高原人的生活，野牦牛却仍需要不被打扰的广阔牧场。",
      facts: [
        "栖息海拔可超 5000 米",
        "野牦牛体型更大",
        "长毛可垂至地面"
      ]
    },
    {
      id: "dhole",
      name: "豺",
      latin: "Cuon alpinus",
      region: "亚洲",
      habitat: "森林 / 草地",
      diet: "肉食",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Cuon alpinus.jpg",
        "Dhole.jpg",
        "Asiatic wild dog.jpg"
      ],
      summary: "会吹口哨联络的亚洲野犬，团队作战能放倒比自己大的鹿。",
      story: "豺的叫声不像狼那么长嚎，更像哨音和咕哝。一群豺能把水鹿围到水边。森林破碎和家犬疾病，让这种很少被童话写到的猎手悄悄消失。",
      facts: [
        "以哨音交流",
        "高度社群性",
        "分布曾横跨亚洲多地"
      ]
    },
    {
      id: "great-hornbill",
      name: "双角犀鸟",
      latin: "Buceros bicornis",
      region: "亚洲",
      habitat: "高大雨林",
      diet: "杂食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Great hornbill (Buceros bicornis) 2.jpg",
        "Buceros bicornis.jpg",
        "Great hornbill.jpg"
      ],
      summary: "盔突像一顶头盔，繁殖时雄鸟会把雌鸟封进树洞。",
      story: "双角犀鸟需要巨大的老树才能找到合适的巢洞。雌鸟产卵后被封在洞里，只留一条缝接受雄鸟送来的果实。砍掉一棵营巢树，等于取消一整季的繁殖。",
      facts: [
        "依赖古老巨树",
        "雌鸟孵卵时被封洞",
        "以榕果为重要食物"
      ]
    },
    {
      id: "chinese-pangolin",
      name: "中华穿山甲",
      latin: "Manis pentadactyla",
      region: "亚洲",
      habitat: "森林 / 丘陵",
      diet: "食虫",
      status: "极危",
      statusLevel: "cr",
      files: [
        "Manis pentadactyla (Taiwan).jpg",
        "Chinese pangolin.jpg",
        "Manis pentadactyla.jpg"
      ],
      summary: "身上全是角质鳞片，遇险就卷成一颗无法下口的球。",
      story: "中华穿山甲用长黏舌深入蚁巢，一夜可以清空大量蚂蚁和白蚁。鳞片让它看起来像一棵会走路的松果。因为鳞片和肉被盗猎，它成了世界上最濒危的哺乳动物之一。",
      facts: [
        "全身被覆角质鳞",
        "无齿靠长舌取食",
        "盗猎是最大威胁"
      ]
    },
    {
      id: "lar-gibbon",
      name: "白掌长臂猿",
      latin: "Hylobates lar",
      region: "亚洲",
      habitat: "热带雨林",
      diet: "植食为主",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Hylobates lar pair of white and black 01.jpg",
        "Hylobates lar.jpg",
        "Lar gibbon.jpg"
      ],
      summary: "用手臂荡过树冠的歌手，晨鸣能划定整片林子的边界。",
      story: "白掌长臂猿成对生活，清晨的二重唱既是爱情也是领地声明。它们的手臂比腿更适合飞翔般的摆荡。没有连续树冠，歌声就会在空地上断掉。",
      facts: [
        "以臂荡方式移动",
        "成对晨鸣",
        "树冠断裂会限制活动"
      ]
    },
    {
      id: "european-badger",
      name: "欧洲獾",
      latin: "Meles meles",
      region: "欧洲",
      habitat: "林地 / 田野",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Meles meles - British Wildlife Centre.jpg",
        "European badger.jpg",
        "Meles meles.jpg"
      ],
      summary: "黑白脸谱的掘地工，一座獾穴可以住上好几代。",
      story: "欧洲獾在夜色里成群出洞，翻找蚯蚓、浆果和谷物。它们的地下城市有卧室、厕所和逃生通道。道路把领地切开后，很多獾死在回家的路上。",
      facts: [
        "穴居系统复杂",
        "以蚯蚓为重要食物",
        "社群世代沿用旧穴"
      ]
    },
    {
      id: "eurasian-otter",
      name: "欧亚水獭",
      latin: "Lutra lutra",
      region: "欧洲",
      habitat: "河流 / 海岸",
      diet: "肉食",
      status: "近危",
      statusLevel: "nt",
      files: [
        "Lutra lutra 3.jpg",
        "Eurasian otter.jpg",
        "Lutra lutra.jpg"
      ],
      summary: "把一条河当成跑道的流线型猎手，粪便可被当作“气味明信片”。",
      story: "欧亚水獭需要干净、连通的水系。它们在石头上留下粪便，告诉后来者谁刚经过。水质改善后一些河流重新出现了水獭，说明一条河是否健康，有时能从一串湿脚印看出来。",
      facts: [
        "依赖清洁水体",
        "领地以气味标记",
        "能在淡水与部分海岸生活"
      ]
    },
    {
      id: "wild-boar",
      name: "野猪",
      latin: "Sus scrofa",
      region: "欧洲",
      habitat: "森林 / 农田边缘",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Sus scrofa scrofa.jpg",
        "Wild boar.jpg",
        "Sus scrofa.jpg"
      ],
      summary: "用鼻子当犁的森林翻土机，也是许多猛兽的重要猎物。",
      story: "野猪把落叶层翻得像被犁过的田，顺带播种和觅食。母猪带着条纹幼崽成群行动，雄性则更独来独往。它们适应城市绿地的速度，让许多欧洲郊区重新认识了“野生”。",
      facts: [
        "嗅觉极敏锐",
        "幼崽有条纹",
        "食谱极广"
      ]
    },
    {
      id: "chamois",
      name: "臆羚",
      latin: "Rupicapra rupicapra",
      region: "欧洲",
      habitat: "高山草地 / 岩壁",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Rupicapra rupicapra.jpg",
        "Chamois.jpg",
        "Alpine chamois.jpg"
      ],
      summary: "钩状短角的山地羚羊，能在几乎直立的岩壁上转身。",
      story: "臆羚夏天上到高山草甸，冬天下到林线寻找食物。它们的蹄缘锐利，适合抓住岩石裂缝。登山者眼中的一个小点，往往已经在观察你很久。",
      facts: [
        "蹄适应攀岩",
        "季节性垂直迁移",
        "角呈倒钩状"
      ]
    },
    {
      id: "alpine-ibex",
      name: "阿尔卑斯野山羊",
      latin: "Capra ibex",
      region: "欧洲",
      habitat: "高山岩壁",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Alpensteinbock (Capra ibex) male.jpg",
        "Capra ibex.jpg",
        "Alpine ibex.jpg"
      ],
      summary: "弯刀般的角能扫过自己的背，脚步却能走在水坝的斜面上。",
      story: "阿尔卑斯野山羊曾因狩猎几乎从阿尔卑斯消失，又靠再引入回来。雄性的角一年年加一圈，像一本写在头上的日历。看见它们站在近乎垂直的混凝土坝上，会重新理解“脚力”。",
      facts: [
        "曾濒临消失后恢复",
        "雄性角可超 1 米",
        "能在陡峭人工表面上行走"
      ]
    },
    {
      id: "kingfisher",
      name: "普通翠鸟",
      latin: "Alcedo atthis",
      region: "欧洲",
      habitat: "溪流 / 河岸",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Alcedo atthis -Common kingfisher-8.jpg",
        "Common kingfisher.jpg",
        "Alcedo atthis.jpg"
      ],
      summary: "把一条河压缩成一颗蓝色宝石，俯冲时几乎不溅起多余的水。",
      story: "普通翠鸟需要清澈的水才能看清小鱼。它们在土岸上挖隧道做巢，入口往往藏在根系后面。河岸被混凝土化之后，蓝色就会从这条河上消失。",
      facts: [
        "依赖清澈浅水",
        "在土岸挖巢",
        "飞起来像一道蓝光"
      ]
    },
    {
      id: "mute-swan",
      name: "疣鼻天鹅",
      latin: "Cygnus olor",
      region: "欧洲",
      habitat: "湖泊 / 河流",
      diet: "植食为主",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Mute swan (Cygnus olor) 2.jpg",
        "Cygnus olor.jpg",
        "Mute swan.jpg"
      ],
      summary: "弯曲的脖颈像问号，其实并不真的“哑巴”，只是很少高声叫。",
      story: "疣鼻天鹅用翅膀拍打水面宣示领地，求偶时会面对面鞠躬。嘴基的黑色疣是成鸟的标记。它们既是公园里的风景，也是湿地生态是否宽裕的指标。",
      facts: [
        "成鸟喙基有黑疣",
        "领地意识强",
        "以水生植物为主食"
      ]
    },
    {
      id: "pine-marten",
      name: "松貂",
      latin: "Martes martes",
      region: "欧洲",
      habitat: "针叶林 / 混交林",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Martes martes cropped.jpg",
        "European pine marten.jpg",
        "Martes martes.jpg"
      ],
      summary: "在树干上跑得像一滴融化的蜂蜜，也会从灰松鼠手里抢坚果。",
      story: "松貂是森林里的中型猎手，吃鼠、鸟卵、浆果和腐肉。重新回到一些林地后，它们甚至帮助压低了入侵的灰松鼠数量。一条黄色喉斑，是在树荫里辨认它的钥匙。",
      facts: [
        "喉部有黄斑",
        "善于树栖奔走",
        "有助于控制灰松鼠"
      ]
    },
    {
      id: "white-stork",
      name: "白鹳",
      latin: "Ciconia ciconia",
      region: "欧洲",
      habitat: "农田 / 湿地",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Ciconia ciconia 1 (Martin Mecnarowski).jpg",
        "White stork.jpg",
        "Ciconia ciconia.jpg"
      ],
      summary: "屋顶上的长途旅行者，归来时会用喙敲出啪嗒啪嗒的欢迎声。",
      story: "白鹳在烟囱和电杆上筑起巨大的巢，冬天则飞向非洲。它们不鸣叫，而是把上下喙敲得像鼓掌。湿草地变成整齐麦田后，鹳必须飞得更远才能装满一嘴食物。",
      facts: [
        "迁徙距离很长",
        "以喙叩击交流",
        "喜在人工建筑物上筑巢"
      ]
    },
    {
      id: "european-bison",
      name: "欧洲野牛",
      latin: "Bison bonasus",
      region: "欧洲",
      habitat: "森林 / 林间空地",
      diet: "植食",
      status: "近危",
      statusLevel: "nt",
      files: [
        "Wisents 4825.jpg",
        "Bison bonasus.jpg",
        "European bison.jpg"
      ],
      summary: "欧洲最重的陆地野生动物，从只剩圈养个体的边缘走了回来。",
      story: "欧洲野牛在一战之后几乎只存在于动物园。再引入计划让它们重新踏进波兰和东欧的森林。一群野牛走过，灌木会被折断，空地会被打开，其他物种也跟着回来。",
      facts: [
        "曾在野外灭绝后被再引入",
        "欧洲最重的野生陆生动物",
        "需要广阔林地"
      ]
    },
    {
      id: "red-squirrel",
      name: "欧亚红松鼠",
      latin: "Sciurus vulgaris",
      region: "欧洲",
      habitat: "针叶林 / 公园",
      diet: "植食为主",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Sciurus vulgaris (Linnaeus, 1758).jpg",
        "Red squirrel.jpg",
        "Sciurus vulgaris.jpg"
      ],
      summary: "耳尖有簇毛的红色闪光，秋天会把松果藏进上百个地点。",
      story: "欧亚红松鼠靠空间记忆找回自己的贮藏。灰松鼠传入后，竞争和疾病让很多英格兰林地只剩下后者。看见一只红松鼠竖着尾巴跑过树干，等于看见这片林子还记得旧住客。",
      facts: [
        "耳尖有季节性簇毛",
        "会贮藏种子",
        "易受灰松鼠竞争影响"
      ]
    },
    {
      id: "roe-deer",
      name: "西方狍",
      latin: "Capreolus capreolus",
      region: "欧洲",
      habitat: "林缘 / 农田",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Capreolus capreolus 02.jpg",
        "Roe deer.jpg",
        "Capreolus capreolus.jpg"
      ],
      summary: "欧洲最常见的小型鹿，晨雾里只露出一对竖耳和一张白臀斑。",
      story: "西方狍喜欢林缘，因为那里既有掩护也有嫩草。雄性在夏季用短角和气味标记灌木。黄昏开车经过田野，最容易看见的野生动物往往就是它。",
      facts: [
        "臀斑呈白色",
        "雄性角分叉较少",
        "适应农业景观"
      ]
    },
    {
      id: "american-black-bear",
      name: "美洲黑熊",
      latin: "Ursus americanus",
      region: "北美洲",
      habitat: "森林",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "American black bear (Ursus americanus).jpg",
        "Ursus americanus.jpg",
        "American black bear.jpg"
      ],
      summary: "颜色其实从黑到棕到白都有，是北美最常见的熊。",
      story: "美洲黑熊大部分时间在找浆果、坚果和昆虫，偶尔才动荤。它们会爬树，也会记住哪条小径通向垃圾箱。学会与熊保持距离，是很多北美小镇的公共课。",
      facts: [
        "善于爬树",
        "食谱随季节大变",
        "体色并不都是黑色"
      ]
    },
    {
      id: "pronghorn",
      name: "叉角羚",
      latin: "Antilocapra americana",
      region: "北美洲",
      habitat: "草原 / 灌丛",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Pronghorn (Antilocapra americana).jpg",
        "Antilocapra americana.jpg",
        "Pronghorn.jpg"
      ],
      summary: "西半球跑得最快的陆地动物，角鞘还会脱落。",
      story: "叉角羚的速度可能是为了追赶已经灭绝的美洲猎豹。它们能以高速持续奔跑，却不善于跨越围栏。一道道牧场铁丝，把草原切成了它们难以越过的迷宫。",
      facts: [
        "时速可超 80 公里",
        "角鞘会季节性脱落",
        "迁徙常被围栏阻断"
      ]
    },
    {
      id: "california-condor",
      name: "加州神鹫",
      latin: "Gymnogyps californianus",
      region: "北美洲",
      habitat: "峡谷 / 海岸",
      diet: "腐食",
      status: "极危",
      statusLevel: "cr",
      files: [
        "Gymnogyps californianus -Santa Barbara Zoo, California, USA-8a.jpg",
        "California condor.jpg",
        "Gymnogyps californianus.jpg"
      ],
      summary: "北美洲翼展最大的鸟，曾全部被带进人工繁育再放回天空。",
      story: "加州神鹫一度在野外一只不剩。铅弹中毒、栖息地丧失让这种清道夫几乎消失。今天每一只放归的个体都有编号翼标，像一份还在书写的复活记录。",
      facts: [
        "翼展可超 2.7 米",
        "曾野外灭绝后被再引入",
        "铅中毒仍是威胁"
      ]
    },
    {
      id: "american-alligator",
      name: "美洲短吻鳄",
      latin: "Alligator mississippiensis",
      region: "北美洲",
      habitat: "沼泽 / 河流",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "American-Alligator.jpg",
        "Alligator mississippiensis.jpg",
        "American alligator.jpg"
      ],
      summary: "从濒危名单上走下来的爬行动物，会用吻部发出次声波震动水面。",
      story: "美洲短吻鳄在繁殖季把头顶露出水面，让水珠跳起舞来吸引配偶。它们挖掘的“鳄塘”在旱季成为鱼类和鸟类的避难所。保护法律让这种曾经被制成皮包的动物重新撑满沼泽。",
      facts: [
        "保护成功的经典案例",
        "会营造水体栖息地",
        "雌性守护巢丘"
      ]
    },
    {
      id: "bobcat",
      name: "短尾猫",
      latin: "Lynx rufus",
      region: "北美洲",
      habitat: "林地 / 半荒漠",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Bobcat2.jpg",
        "Lynx rufus.jpg",
        "Bobcat.jpg"
      ],
      summary: "尾巴短得像被剪过，是北美最适应多种环境的小型猫科。",
      story: "短尾猫从佛罗里达沼泽走到西部峡谷，都能找到兔子。它们用斑点和短尾在灌丛里隐形。郊区的红外相机常常在夜里拍到一对发光的眼睛，然后是一团斑纹。",
      facts: [
        "尾短有黑尖",
        "适应性极强",
        "主要以兔类为食"
      ]
    },
    {
      id: "coyote",
      name: "郊狼",
      latin: "Canis latrans",
      region: "北美洲",
      habitat: "草原 / 城市边缘",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "2009-Coyote-Yosemite.jpg",
        "Canis latrans.jpg",
        "Coyote.jpg"
      ],
      summary: "会在城市里唱夜曲的犬科，适应力让它越赶越多。",
      story: "郊狼吃鼠、果、腐肉，也学会了看交通灯。它们的嚎叫常被误认成狼。消灭大型狼之后，郊狼填进了许多空出来的生态位，成为北美最成功的中型食肉动物之一。",
      facts: [
        "高度适应城市",
        "食谱极广",
        "家庭单位灵活"
      ]
    },
    {
      id: "striped-skunk",
      name: "条纹臭鼬",
      latin: "Mephitis mephitis",
      region: "北美洲",
      habitat: "林地 / 农田",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Striped Skunk.jpg",
        "Mephitis mephitis.jpg",
        "Striped skunk.jpg"
      ],
      summary: "黑白警告色背后是精确瞄准的臭液喷雾。",
      story: "条纹臭鼬先跺脚、竖尾，最后才喷射。那液体能让进攻者暂时失明并记住教训。它们其实大部分时间在挖甲虫和老鼠，只有被逼到角落才动用化学武器。",
      facts: [
        "喷雾可及数米",
        "警戒姿态分明",
        "以昆虫和小型动物为食"
      ]
    },
    {
      id: "porcupine",
      name: "北美豪猪",
      latin: "Erethizon dorsatum",
      region: "北美洲",
      habitat: "森林",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Erethizon dorsatum (North American porcupine).jpg",
        "North American porcupine.jpg",
        "Erethizon dorsatum.jpg"
      ],
      summary: "身上两万多根刺不是射出去的，而是等对方自己撞上来。",
      story: "北美豪猪会爬到树冠吃嫩芽和树皮。刺的反向倒钩让被扎中的捕食者很难拔出。幼崽出生时刺是软的，几小时后才变硬——像一份延迟生效的盔甲。",
      facts: [
        "刺有倒钩",
        "善于爬树",
        "冬食树皮"
      ]
    },
    {
      id: "canada-lynx",
      name: "加拿大猞猁",
      latin: "Lynx canadensis",
      region: "北美洲",
      habitat: "北方森林",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Canada lynx by Keith Williams.jpg",
        "Lynx canadensis.jpg",
        "Canada lynx.jpg"
      ],
      summary: "脚掌宽得像雪鞋，数量跟着雪兔的丰年歉年一起起伏。",
      story: "加拿大猞猁几乎把菜单写成了“雪兔”。兔多的年份幼崽成活率高，兔少的年份整片林子都会安静下来。厚毛和巨大脚掌让它们能在深雪里继续走路。",
      facts: [
        "脚掌极宽",
        "高度依赖雪兔",
        "耳尖有簇毛"
      ]
    },
    {
      id: "american-beaver",
      name: "美洲河狸",
      latin: "Castor canadensis",
      region: "北美洲",
      habitat: "河流 / 湿地",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "American Beaver.jpg",
        "Castor canadensis.jpg",
        "North American beaver.jpg"
      ],
      summary: "会改变地图的工程师，一座坝就能把小溪变成湿地。",
      story: "美洲河狸用牙齿放倒杨树和柳树，再把它们编进水坝。新形成的池塘养活鱼、蛙和水禽。人也曾为皮毛几乎把它们捕尽，今天很多流域又把河狸当成免费的修复工。",
      facts: [
        "会建造水坝与巢穴",
        "牙齿终生生长",
        "能显著改变水文"
      ]
    },
    {
      id: "great-horned-owl",
      name: "大角鸮",
      latin: "Bubo virginianus",
      region: "北美洲",
      habitat: "森林 / 城市公园",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Bubo virginianus 06.jpg",
        "Great horned owl.jpg",
        "Bubo virginianus.jpg"
      ],
      summary: "头上两撮“角羽”不是耳朵，低沉的叫声却能压住整片夜。",
      story: "大角鸮几乎什么都敢抓，包括臭鼬和别的猫头鹰。它们不自己筑巢，而是占用鹰或乌鸦的旧巢。城市里的墓园和高尔夫球场，有时也是它们的猎场。",
      facts: [
        "食谱极广",
        "不自建巢",
        "叫声低沉悠长"
      ]
    },
    {
      id: "monarch",
      name: "君主斑蝶",
      latin: "Danaus plexippus",
      region: "北美洲",
      habitat: "草原 / 花园",
      diet: "植食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Monarch Butterfly Danaus plexippus (4514).jpg",
        "Danaus plexippus.jpg",
        "Monarch butterfly.jpg"
      ],
      summary: "用好几代生命接力，完成从加拿大到墨西哥的迁徙。",
      story: "一只君主斑蝶吃过马利筋，翅膀就带上了毒素警告色。秋季出生的一代会飞到墨西哥的冷杉林过冬，春天再往北传宗接代。没有连成线的蜜源和过冬林地，这场接力就会在中途断开。",
      facts: [
        "跨代完成迁徙",
        "幼虫取食马利筋",
        "过冬地高度集中"
      ]
    },
    {
      id: "american-pika",
      name: "北美鼠兔",
      latin: "Ochotona princeps",
      region: "北美洲",
      habitat: "高山碎石坡",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Ochotona princeps.jpg",
        "American pika.jpg",
        "Pika with haypile.jpg"
      ],
      summary: "不会冬眠的高山居民，夏天要晒够一整冬的干草。",
      story: "北美鼠兔把植物收成小垛，在石头缝里风干。它们对高温很敏感，因此气候变暖会把它们往更高处推。一声尖哨从岩坡传来，常常比看见那团灰色更容易。",
      facts: [
        "不冬眠而贮藏食物",
        "对高温敏感",
        "生活在碎石坡"
      ]
    },
    {
      id: "roadrunner",
      name: "走鹃",
      latin: "Geococcyx californianus",
      region: "北美洲",
      habitat: "干旱灌丛",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Greater Roadrunner.jpg",
        "Geococcyx californianus.jpg",
        "Roadrunner.jpg"
      ],
      summary: "宁愿跑步也不常飞的杜鹃科鸟，能对付蜥蜴甚至小型蛇。",
      story: "走鹃在沙漠地面上像一支被发射的箭。它们用速度和精准的喙捕捉蜥蜴、昆虫和蛇。卡通里的“哔哔鸟”被简化了，真实的走鹃更像一位严肃的热沙漠猎手。",
      facts: [
        "善跑不善长飞",
        "能捕食毒蜥与蛇",
        "尾巴用于转向平衡"
      ]
    },
    {
      id: "giant-anteater",
      name: "大食蚁兽",
      latin: "Myrmecophaga tridactyla",
      region: "南美洲",
      habitat: "草原 / 疏林",
      diet: "食虫",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Giant Anteater (Myrmecophaga tridactyla).jpg",
        "Myrmecophaga tridactyla.jpg",
        "Giant anteater.jpg"
      ],
      summary: "一根管子当脸，一条尾巴当毯子，舌头一分钟能进出上百次。",
      story: "大食蚁兽从不同蚁巢各取一点，以免把一座巢吃到崩溃。它们用前爪破开坚硬的蚁丘，再用黏舌收获。走路时爪子向内弯着，像握着自己的工具。",
      facts: [
        "无齿",
        "舌长可超 60 厘米",
        "一次只取食部分蚁巢"
      ]
    },
    {
      id: "spectacled-bear",
      name: "眼镜熊",
      latin: "Tremarctos ornatus",
      region: "南美洲",
      habitat: "安第斯云雾林",
      diet: "植食为主",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Tremarctos ornatus -Berlin Zoological Garden-8a.jpg",
        "Spectacled bear.jpg",
        "Tremarctos ornatus.jpg"
      ],
      summary: "南美洲唯一的熊，眼圈像戴着一副没有两只相同的眼镜。",
      story: "眼镜熊大部分时间吃果实、竹笋和腐肉很少的植物。每只脸上的浅色图案都不同。云雾林被改成牧场后，这种害羞的熊只能沿着更窄的山脊移动。",
      facts: [
        "南美唯一现生熊",
        "面部斑纹个体独特",
        "善于爬树取食"
      ]
    },
    {
      id: "vicuna",
      name: "小羊驼",
      latin: "Vicugna vicugna",
      region: "南美洲",
      habitat: "高原草地",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Vicugna vicugna (peruvian camelid).jpg",
        "Vicuña.jpg",
        "Vicugna vicugna.jpg"
      ],
      summary: "羊驼家族里最纤细的野生成员，毛比云还轻。",
      story: "小羊驼的绒毛曾让它们几乎被剪到灭绝。今天的社区轮牧和严格剪毛制度，让这种高原则畜重新成为风景。它们喝很少的水，却能在稀薄空气里奔跑。",
      facts: [
        "绒毛极为细软",
        "曾因毛皮濒危",
        "适应高海拔干旱"
      ]
    },
    {
      id: "llama",
      name: "大羊驼",
      latin: "Lama glama",
      region: "南美洲",
      habitat: "高原 / 牧场",
      diet: "植食",
      status: "家养",
      statusLevel: "dom",
      files: [
        "Llama (Lama glama) portrait.jpg",
        "Lama glama.jpg",
        "Llama.jpg"
      ],
      summary: "安第斯的驮运伙伴，不满意时会朝你吐一口青草沫。",
      story: "大羊驼被驯化来运货、给毛和看护羊群。它们记仇也记好，能认出常打交道的人。一声抱怨的咕哝，常常比踢更早到来。",
      facts: [
        "由原驼驯化而来",
        "可作驮畜与卫士",
        "会用吐唾表达不满"
      ]
    },
    {
      id: "howler-monkey",
      name: "红吼猴",
      latin: "Alouatta seniculus",
      region: "南美洲",
      habitat: "热带雨林",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Alouatta seniculus seniculus.jpg",
        "Red howler monkey.jpg",
        "Alouatta seniculus.jpg"
      ],
      summary: "黎明时分能把整片林子叫醒，声音来自喉咙里的骨盒。",
      story: "红吼猴的舌骨扩大成共鸣箱，几公里外都能听见。它们不需要每天走很远，因为叫声已经替它们划好了边界。听起来像怒吼，其实常常只是在说：这棵树有主了。",
      facts: [
        "是最响的陆生动物之一",
        "以叶为主食",
        "活动范围相对较小"
      ]
    },
    {
      id: "spectacled-caiman",
      name: "眼镜凯门鳄",
      latin: "Caiman crocodilus",
      region: "南美洲",
      habitat: "湿地 / 河流",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Caiman crocodilus -Trinidad-6.jpg",
        "Spectacled caiman.jpg",
        "Caiman crocodilus.jpg"
      ],
      summary: "眼间有一副骨质“眼镜框”，是新热带最常见的鳄类之一。",
      story: "眼镜凯门鳄能在水塘、沟渠甚至牧场水坑里生活。适应性让它们在一些地方数量很多，也让人更容易忽略真正脆弱的近亲。夜间用手电筒一照，水面会浮起两排红点。",
      facts: [
        "眼间有骨质脊",
        "适应性强",
        "以鱼和甲壳动物为食"
      ]
    },
    {
      id: "poison-frog",
      name: "染色箭毒蛙",
      latin: "Dendrobates tinctorius",
      region: "南美洲",
      habitat: "热带雨林地面",
      diet: "食虫",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Dendrobates tinctorius (Regenbogenwaldsteiger) a.jpg",
        "Dendrobates tinctorius.jpg",
        "Dyeing dart frog.jpg"
      ],
      summary: "把毒性写在身上的微型广告牌，颜色越醒目越不必逃跑。",
      story: "染色箭毒蛙的毒素来自野生食物中的生物碱，人工饲养后往往不再那么毒。雄性会把蝌蚪背到树洞水洼里。一枚纽扣大的身体，撑起一套复杂的育幼路线。",
      facts: [
        "体色变异极多",
        "野生个体具毒性",
        "雄性背运蝌蚪"
      ]
    },
    {
      id: "andean-condor",
      name: "安第斯神鹫",
      latin: "Vultur gryphus",
      region: "南美洲",
      habitat: "高山 / 海岸",
      diet: "腐食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Vultur gryphus -Patagonia, Chile-8.jpg",
        "Andean condor.jpg",
        "Vultur gryphus.jpg"
      ],
      summary: "雄性头上顶着肉冠，借助上升气流可以滑翔数小时。",
      story: "安第斯神鹫是安第斯山脉的清道夫和象征。一对配偶多年相守，几年才成功养大一只幼鸟。投食项目能让它们被看见，却替代不了完整的有蹄类和开阔天空。",
      facts: [
        "世界上最重的飞行鸟之一",
        "繁殖周期很长",
        "依赖上升气流滑翔"
      ]
    },
    {
      id: "giant-otter",
      name: "巨獭",
      latin: "Pteronura brasiliensis",
      region: "南美洲",
      habitat: "河流 / 湖岸",
      diet: "肉食",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Giant Otter (Pteronura brasiliensis).jpg",
        "Pteronura brasiliensis.jpg",
        "Giant otter.jpg"
      ],
      summary: "世界上最长的水獭，家族会用合唱把一条河宣布为自己的。",
      story: "巨獭白天成群捕鱼，睡在河岸的洞穴里。它们的喉咙斑纹像指纹。水银污染、淘金和渔网让这种外向的河流居民变得少见。一条安静的河，有时是因为巨獭已经离开。",
      facts: [
        "体长可近 1.8 米",
        "高度社群性",
        "喉斑可用于识别个体"
      ]
    },
    {
      id: "amazon-river-dolphin",
      name: "亚马孙河豚",
      latin: "Inia geoffrensis",
      region: "南美洲",
      habitat: "河流 / 淹没林",
      diet: "肉食",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Inia geoffrensis 2.jpg",
        "Amazon river dolphin.jpg",
        "Pink river dolphin.jpg"
      ],
      summary: "洪水季节会游进森林的粉色海豚，颈椎灵活得能转弯抓鱼。",
      story: "亚马孙河豚的粉色随着年龄和活动加深。未愈合的颈椎让它们能在树干间转身。传说把它们写成会上岸的精灵，现实里它们更怕渔网、水坝和被搅浑的河水。",
      facts: [
        "成体常呈粉红色",
        "能进入淹没森林",
        "颈椎比海海豚更灵活"
      ]
    },
    {
      id: "hoatzin",
      name: "麝雉",
      latin: "Opisthocomus hoazin",
      region: "南美洲",
      habitat: "河岸沼泽林",
      diet: "植食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Opisthocomus hoazin2.jpg",
        "Hoatzin.jpg",
        "Opisthocomus hoazin.jpg"
      ],
      summary: "雏鸟翅膀上还有爪子，成鸟则靠发酵树叶发出特别的气味。",
      story: "麝雉像一只从另一条演化路上走来的鸟。雏鸟用翼爪爬回巢，成鸟的嗉囊像反刍动物一样发酵叶子。靠近一棵它们栖息的树，先闻到的往往不是羽毛，而是青贮的味道。",
      facts: [
        "雏鸟具翼爪",
        "以叶为主并以发酵消化",
        "气味独特"
      ]
    },
    {
      id: "maned-wolf",
      name: "鬃狼",
      latin: "Chrysocyon brachyurus",
      region: "南美洲",
      habitat: "草原 / 灌丛",
      diet: "杂食",
      status: "近危",
      statusLevel: "nt",
      files: [
        "Maned wolf (Chrysocyon brachyurus) 2.jpg",
        "Chrysocyon brachyurus.jpg",
        "Maned wolf.jpg"
      ],
      summary: "腿长得像踩着高跷的狐狸，其实既不是狼也不是狐。",
      story: "鬃狼用长腿越过高草，夜晚发出类似咳嗽的吼声。果实在它们的食谱里占很大比例，因此也在草原上帮植物搬家。单独生活的它们，用气味而不是嚎叫维持距离。",
      facts: [
        "单独成属",
        "腿极长",
        "果实占食谱很大比例"
      ]
    },
    {
      id: "southern-pudu",
      name: "南方普度鹿",
      latin: "Pudu puda",
      region: "南美洲",
      habitat: "温带雨林",
      diet: "植食",
      status: "近危",
      statusLevel: "nt",
      files: [
        "Pudu puda.jpg",
        "Southern pudú.jpg",
        "Pudu.jpg"
      ],
      summary: "世界上最矮的鹿之一，受惊时会像兔子一样钻进密林。",
      story: "南方普度鹿肩高往往只有 40 厘米出头。它们在智利和阿根廷的湿润森林里啃嫩芽，尽量不走到空地上。犬和破碎的林缘，对这种微型鹿来说都是巨大的威胁。",
      facts: [
        "肩高约 40 厘米",
        "极隐蔽",
        "依赖密集林下植被"
      ]
    },
    {
      id: "coati",
      name: "南美浣熊",
      latin: "Nasua nasua",
      region: "南美洲",
      habitat: "森林 / 林缘",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Nasua nasua 2.jpg",
        "South American coati.jpg",
        "Nasua nasua.jpg"
      ],
      summary: "鼻子能翘起来翻落叶，雌性和幼崽常排成一条探路队。",
      story: "南美浣熊用灵活的长鼻探入石缝和树洞。雌性带着孩子成群觅食，成年雄性多半独自行动。它们既是种子传播者，也是野餐篮的潜在访客。",
      facts: [
        "鼻部极度灵活",
        "雌性结群",
        "昼夜都可能活动"
      ]
    },
    {
      id: "tasmanian-devil",
      name: "袋獾",
      latin: "Sarcophilus harrisii",
      region: "大洋洲",
      habitat: "林地 / 海岸灌丛",
      diet: "肉食",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Sarcophilus harrisii taronga.jpg",
        "Tasmanian devil.jpg",
        "Sarcophilus harrisii.jpg"
      ],
      summary: "咬合力大得离谱的食腐者，夜晚的尖叫曾让人以为有魔鬼。",
      story: "袋獾能咬碎骨头，把一具尸体清理到几乎不剩。一种传染性面部肿瘤曾让种群崩溃。隔离的无病岛屿和疫苗研究，是这场现代疫症里少有的光。",
      facts: [
        "咬合力相对体型极强",
        "会发出刺耳尖叫",
        "受传染性肿瘤威胁"
      ]
    },
    {
      id: "quokka",
      name: "短尾矮袋鼠",
      latin: "Setonix brachyurus",
      region: "大洋洲",
      habitat: "岛屿灌丛",
      diet: "植食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Quokka 1.jpg",
        "Setonix brachyurus.jpg",
        "Quokka.jpg"
      ],
      summary: "常被称作“世界上最爱笑的动物”，其实只是一张放松的脸。",
      story: "短尾矮袋鼠在罗特尼斯岛上很少怕人，因此成为自拍明星。大陆种群则要面对狐狸和栖息地丧失。微笑是人类的投影，对它们来说，夜晚的草和白天的荫凉才重要。",
      facts: [
        "夜行植食",
        "岛屿种群更不怕人",
        "大陆种群受入侵捕食者威胁"
      ]
    },
    {
      id: "cassowary",
      name: "鹤鸵",
      latin: "Casuarius casuarius",
      region: "大洋洲",
      habitat: "热带雨林",
      diet: "植食为主",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Casuarius casuarius -Miami Metrozoo, Florida, USA-8a.jpg",
        "Southern cassowary.jpg",
        "Casuarius casuarius.jpg"
      ],
      summary: "头上顶着头盔，脚上藏着能划开威胁的匕首爪。",
      story: "鹤鸵吞下整颗雨林果实，再把种子送到别处发芽。雄鸟负责孵卵和带雏。遇见它们最好让路：这不是好斗，而是一位雨林园丁在保护自己的空间。",
      facts: [
        "是重要的种子传播者",
        "雄鸟育幼",
        "内趾有长刃状爪"
      ]
    },
    {
      id: "sugar-glider",
      name: "蜜袋鼯",
      latin: "Petaurus breviceps",
      region: "大洋洲",
      habitat: "桉树林",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Petaurus breviceps 1.jpg",
        "Sugar glider.jpg",
        "Petaurus breviceps.jpg"
      ],
      summary: "四肢间撑开皮膜，能从一棵桉树滑到另一棵。",
      story: "蜜袋鼯夜里在树冠间滑翔觅食花蜜、树液和昆虫。社群挤在树洞里互相理毛。失去连续的树冠后，一次滑翔就会变成一次坠落。",
      facts: [
        "能滑翔数十米",
        "树洞巢居",
        "以树液和花蜜为重要食物"
      ]
    },
    {
      id: "echidna",
      name: "短吻针鼹",
      latin: "Tachyglossus aculeatus",
      region: "大洋洲",
      habitat: "森林 / 草原",
      diet: "食虫",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Short-beaked echidna in Melbourne Zoo.jpg",
        "Tachyglossus aculeatus.jpg",
        "Short-beaked echidna.jpg"
      ],
      summary: "卵生的刺球，遇到危险就把自己种进土里。",
      story: "短吻针鼹和鸭嘴兽同属单孔目。它们用吻探测电信号，挖开蚁巢。繁殖期雄性会排成一列跟着雌性，像一场缓慢的游行。",
      facts: [
        "卵生哺乳动物",
        "遇险会挖地自埋",
        "分布几乎遍及澳洲"
      ]
    },
    {
      id: "dingo",
      name: "澳洲野犬",
      latin: "Canis dingo",
      region: "大洋洲",
      habitat: "干旱区 / 林地",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Dingo walking.jpg",
        "Canis dingo.jpg",
        "Dingo.jpg"
      ],
      summary: "澳洲最大的陆地掠食者之一，嚎叫却很少像家犬那样连续狂吠。",
      story: "澳洲野犬可能由早期人类带上大陆，如今已是生态中的关键角色。与家犬杂交让“纯野犬”变得难以界定。一道著名的防犬篱笆，也画出了人对荒野的矛盾心情。",
      facts: [
        "较少连续吠叫",
        "与家犬存在杂交",
        "对小型哺乳动物有调控作用"
      ]
    },
    {
      id: "frilled-lizard",
      name: "伞蜥",
      latin: "Chlamydosaurus kingii",
      region: "大洋洲",
      habitat: "热带疏林",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Chlamydosaurus kingii.jpg",
        "Frilled lizard.jpg",
        "Frill-necked lizard.jpg"
      ],
      summary: "受惊时张开颈部的伞状皱褶，再以后腿直立奔跑。",
      story: "伞蜥大部分时间贴在树干上，颜色像一块树皮。真正被逼到眼前，那圈皱褶才会突然打开，把身体放大一倍。随后它们常常两脚着地跑走，像一只匆忙的微型恐龙。",
      facts: [
        "颈伞用于威慑",
        "能双足奔跑",
        "以昆虫和小型脊椎动物为食"
      ]
    },
    {
      id: "saltwater-crocodile",
      name: "湾鳄",
      latin: "Crocodylus porosus",
      region: "大洋洲",
      habitat: "河口 / 红树林",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Crocodylus porosus 4.jpg",
        "Saltwater crocodile.jpg",
        "Crocodylus porosus.jpg"
      ],
      summary: "现存最大的爬行动物，能把身体当成一根漂在潮水里的木头。",
      story: "湾鳄既可以生活在淡水上游，也可以穿越开阔海域。它们的伏击精确、爆发力惊人。北澳的河边警告牌不是装饰，而是和这种古老猎手共用土地的说明书。",
      facts: [
        "体长可超 6 米",
        "能进行海洋巡游",
        "领域性极强"
      ]
    },
    {
      id: "kiwi",
      name: "北岛褐几维",
      latin: "Apteryx mantelli",
      region: "大洋洲",
      habitat: "森林 / 灌丛",
      diet: "食虫",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Apteryx mantelli.jpg",
        "North Island brown kiwi.jpg",
        "Kiwi bird.jpg"
      ],
      summary: "鼻孔长在喙尖的夜行鸟，蛋大到几乎像一颗不合比例的月亮。",
      story: "几维用喙尖的鼻孔在落叶层下闻蚯蚓。它们不会飞，羽毛像头发。引入的鼬和猫让这种新西兰国鸟必须靠围栏和夜间巡护才能睡觉。",
      facts: [
        "鼻孔位于喙尖",
        "卵相对体型极大",
        "不会飞的夜行鸟"
      ]
    },
    {
      id: "lyrebird",
      name: "华丽琴鸟",
      latin: "Menura novaehollandiae",
      region: "大洋洲",
      habitat: "温带雨林",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Lyrebird.jpg",
        "Menura novaehollandiae.jpg",
        "Superb lyrebird.jpg"
      ],
      summary: "能模仿链锯、相机快门和二十种鸟鸣的森林拟音师。",
      story: "雄性华丽琴鸟在冬天的土台上展开琴状尾羽，同时播放一段从森林和人类世界采样的混音。模仿不是玩笑，而是求偶质量的展示。听得越像，越说明这只鸟活得足够很久、听得足够很细。",
      facts: [
        "模仿能力极强",
        "雄鸟有琴状尾",
        "在地面舞台求偶"
      ]
    },
    {
      id: "thorny-devil",
      name: "刺魔蜥",
      latin: "Moloch horridus",
      region: "大洋洲",
      habitat: "干旱沙地",
      diet: "食虫",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Moloch horridus.jpg",
        "Thorny devil.jpg",
        "Thorny devil lizard.jpg"
      ],
      summary: "全身是刺，皮肤却能把露水一路引到嘴角。",
      story: "刺魔蜥几乎只吃蚂蚁，常常站在蚁道旁边慢慢用餐。皮肤上的微细沟槽能通过毛细作用收集水分。它看起来可怕，其实慢、专一，并且完全依赖完整的沙漠蚁群。",
      facts: [
        "皮肤可收集水分",
        "几乎只吃蚂蚁",
        "体色随温度变化"
      ]
    },
    {
      id: "numbat",
      name: "袋食蚁兽",
      latin: "Myrmecobius fasciatus",
      region: "大洋洲",
      habitat: "桉树林",
      diet: "食虫",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Myrmecobius fasciatus 1.jpg",
        "Numbat.jpg",
        "Myrmecobius fasciatus.jpg"
      ],
      summary: "白天活动的条纹食蚁者，舌头可以探进白蚁的隧道。",
      story: "袋食蚁兽不挖巨大的巢，而是沿着腐烂原木寻找白蚁。狐狸和猫让它们退到少数保护区。白天能看见这种有袋类，本身就是保护围栏有效的证据。",
      facts: [
        "白天活动",
        "几乎只吃白蚁",
        "依赖粗木质残体"
      ]
    },
    {
      id: "narwhal",
      name: "一角鲸",
      latin: "Monodon monoceros",
      region: "极地海洋",
      habitat: "北极海域",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Narwhals breach.jpg",
        "Monodon monoceros.jpg",
        "Narwhal.jpg"
      ],
      summary: "螺旋长牙其实是一颗长出来的牙齿，能感知水温和盐度。",
      story: "一角鲸的长牙布满神经末梢，不是单纯的长矛。雄性常用它并排摩擦。海冰变化让这种“海上独角兽”必须在移动的通道里寻找呼吸孔。",
      facts: [
        "长牙多为雄性左上牙",
        "牙本质有感觉功能",
        "依赖海冰边缘生境"
      ]
    },
    {
      id: "beluga",
      name: "白鲸",
      latin: "Delphinapterus leucas",
      region: "极地海洋",
      habitat: "北极近海",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Beluga25.jpg",
        "Delphinapterus leucas.jpg",
        "Beluga whale.jpg"
      ],
      summary: "没有背鳍的白色歌手，额部的“瓜”让表情看起来总会微笑。",
      story: "白鲸能做出丰富的声音，因此常被称作海金丝雀。柔软的颈部让它们可以点头和转向。河口和浅湾是幼鲸的育婴室，也是航运噪音最先到达的地方。",
      facts: [
        "成体呈白色",
        "发声极其丰富",
        "颈比多数鲸类更灵活"
      ]
    },
    {
      id: "leatherback",
      name: "棱皮龟",
      latin: "Dermochelys coriacea",
      region: "极地海洋",
      habitat: "远洋",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "LeatherbackTurtle.jpg",
        "Dermochelys coriacea.jpg",
        "Leatherback sea turtle.jpg"
      ],
      summary: "没有硬壳的最大海龟，能追着水母游进寒冷的海域。",
      story: "棱皮龟的背是革质的棱脊，而不是普通龟壳。它们能调节体温，因此出现在比其他海龟更冷的海里。误食塑料袋对靠水母为生的它尤其危险。",
      facts: [
        "现存最大的龟",
        "主要捕食水母",
        "分布跨越热带到冷温带"
      ]
    },
    {
      id: "hammerhead",
      name: "路氏双髻鲨",
      latin: "Sphyrna mokarran",
      region: "极地海洋",
      habitat: "热带大陆架",
      diet: "肉食",
      status: "极危",
      statusLevel: "cr",
      files: [
        "Sphyrna mokarran at georgia aquarium.jpg",
        "Great hammerhead.jpg",
        "Sphyrna mokarran.jpg"
      ],
      summary: "把脑袋摊成一把 T 形探测器，用来扫描埋在沙里的魟。",
      story: "路氏双髻鲨的头能增加升力，也能拉开两侧的电感受器。它们常独自巡游，却会在某些海山附近短暂聚集。鱼翅贸易让这种外形最容易被认出的鲨变得最危险。",
      facts: [
        "头呈明显锤状",
        "能探测沙下猎物",
        "鱼翅需求致种群骤降"
      ]
    },
    {
      id: "sperm-whale",
      name: "抹香鲸",
      latin: "Physeter macrocephalus",
      region: "极地海洋",
      habitat: "深海",
      diet: "肉食",
      status: "易危",
      statusLevel: "vu",
      files: [
        "Mother and baby sperm whale.jpg",
        "Physeter macrocephalus.jpg",
        "Sperm whale.jpg"
      ],
      summary: "拥有动物世界最大的脑子，能潜到黑暗里用声音寻找大王乌贼。",
      story: "抹香鲸的头是一座巨大的声波透镜。雌性和幼鲸组成稳定的家庭，雄性则在更冷的海里游荡。捕鲸时代追逐的是头里的鲸蜡，今天它们要面对的是噪音和塑料。",
      facts: [
        "地球上最大的齿鲸",
        "可深潜超过 1000 米",
        "以声呐定位猎物"
      ]
    },
    {
      id: "humpback-whale",
      name: "座头鲸",
      latin: "Megaptera novaeangliae",
      region: "极地海洋",
      habitat: "远洋 / 近海",
      diet: "滤食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Humpback stellwagen edit.jpg",
        "Megaptera novaeangliae.jpg",
        "Humpback whale.jpg"
      ],
      summary: "胸鳍长得像翅膀，雄性的歌能在繁殖海域里传很远。",
      story: "座头鲸会合作布下“气泡网”把鱼赶进餐桌。它们的迁徙连接极地索饵场和热带繁殖场。每一尾尾叶的黑白图案都不同，像一本写在海上的身份证。",
      facts: [
        "会使用气泡网捕食",
        "雄性会唱歌",
        "尾叶斑纹可识别个体"
      ]
    },
    {
      id: "gentoo-penguin",
      name: "巴布亚企鹅",
      latin: "Pygoscelis papua",
      region: "极地海洋",
      habitat: "亚南极岛屿",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Pygoscelis papua -Brown Bluff.jpg",
        "Gentoo penguin.jpg",
        "Pygoscelis papua.jpg"
      ],
      summary: "头上像系了一条白头带，是企鹅里游泳最快的选手之一。",
      story: "巴布亚企鹅用卵石求婚，谁偷了邻居的石头，巢边就会响起抗议。它们在海藻和磷虾之间选择当日菜单。游客靠得太近时，一条白头带会先侧过身来打量你。",
      facts: [
        "游泳速度很快",
        "用石子筑巢",
        "眼上方有白色斑纹"
      ]
    },
    {
      id: "leopard-seal",
      name: "豹海豹",
      latin: "Hydrurga leptonyx",
      region: "极地海洋",
      habitat: "南极海冰",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Hydrurga leptonyx edit1.jpg",
        "Leopard seal.jpg",
        "Hydrurga leptonyx.jpg"
      ],
      summary: "嘴里同时长着用于撕咬和过滤的牙齿，能捕企鹅也能吃磷虾。",
      story: "豹海豹独自沿着冰缘巡逻，身形修长得像一枚鱼雷。它们会在水下发出复杂的叫声。对企鹅来说，上岸前那一段浅水是最危险的走廊。",
      facts: [
        "牙齿兼具撕咬与过滤",
        "多为独居",
        "可捕食企鹅和其他海豹"
      ]
    },
    {
      id: "california-sea-lion",
      name: "加州海狮",
      latin: "Zalophus californianus",
      region: "极地海洋",
      habitat: "岩岸 / 码头",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Zalophus californianus male.jpg",
        "California sea lion.jpg",
        "Zalophus californianus.jpg"
      ],
      summary: "能在码头上排成一排晒太阳，水下却是灵活的高速猎手。",
      story: "加州海狮用可旋转的后肢在陆地上“走路”，这点与真正的海豹不同。渔码头成了它们的休息室，也带来了与渔民的摩擦。一声吠叫从浮筒上传来，城市港口就有了野生的边角。",
      facts: [
        "后肢可在陆地前转",
        "社群在岸上聚集",
        "以鱼类和乌贼为食"
      ]
    },
    {
      id: "clownfish",
      name: "眼斑双锯鱼",
      latin: "Amphiprion ocellaris",
      region: "极地海洋",
      habitat: "珊瑚礁",
      diet: "杂食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Ocellaris clownfish.JPG",
        "Amphiprion ocellaris.jpg",
        "Clownfish in anemone.jpg"
      ],
      summary: "住在海葵触手里的小鱼，家族里最大的那条会变成雌鱼。",
      story: "眼斑双锯鱼对海葵的刺有特殊耐受，因此把最危险的地方当成育婴室。如果雌鱼消失，体型最大的雄鱼会转变性别。珊瑚礁一白化，海葵和它们的小房客会一起失去住所。",
      facts: [
        "与海葵共生",
        "会性别转变",
        "以藻类和无脊椎动物为食"
      ]
    },
    {
      id: "whale-shark",
      name: "鲸鲨",
      latin: "Rhincodon typus",
      region: "极地海洋",
      habitat: "热带远洋",
      diet: "滤食",
      status: "濒危",
      statusLevel: "en",
      files: [
        "Whale shark Georgia aquarium.jpg",
        "Rhincodon typus.jpg",
        "Whale shark.jpg"
      ],
      summary: "世界上最大的鱼，满身星点，却只滤食浮游生物。",
      story: "鲸鲨张开的嘴像一座移动的山洞，海水从鳃耙间流走，留下磷虾和鱼卵。每一头的斑点排列都不同。观光船靠得太近时，这颗温和的星球会潜向更深的蓝。",
      facts: [
        "体长可超 12 米",
        "滤食浮游生物",
        "斑点可用于识别个体"
      ]
    },
    {
      id: "giant-pacific-octopus",
      name: "北美巨章鱼",
      latin: "Enteroctopus dofleini",
      region: "极地海洋",
      habitat: "北太平洋岩礁",
      diet: "肉食",
      status: "无危",
      statusLevel: "lc",
      files: [
        "Enteroctopus dofleini.jpg",
        "Giant Pacific octopus.jpg",
        "Giant octopus.jpg"
      ],
      summary: "冷水里的智力选手，腕足上的吸盘能品尝也能抓住螃蟹。",
      story: "北美巨章鱼会开盖、堆石、改变颜色和质地。寿命通常只有几年，繁殖后亲体往往会死去。一只看似柔软的身体，把短暂的一生用在学习如何从缝隙里消失。",
      facts: [
        "是体型最大的章鱼之一",
        "吸盘具味觉",
        "繁殖后亲体常死亡"
      ]
    }
  ];

  const unsplash = (id, width = 1400) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

  window.ANIMAL_WORLD = raw.map((item) => {
    const extras = (item.unsplash || []).map((id) => unsplash(id, 1400));
    const commons = item.files.map((file) => wm(file, 1400));
    const photos = [...commons, ...extras];
    return {
      ...item,
      image: photos[0],
      thumb: wm(item.files[0], 720),
      photos
    };
  });
})();

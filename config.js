const CONFIG = {
    // Thông tin chung
    serverName: "ZURA",
    serverNameHighlight: "COMMUNITY",
    serverSlogan: "Cộng Đồng Sinh Tồn Đỉnh Cao",
    serverIP: "zura.wtf", // IP dùng để check trạng thái luôn
    logoUrl: "https://media.discordapp.net/attachments/1477738851983425657/1477753849950376108/file_0000000068bc71faafe386a73cd458ea.png?ex=69f6fd45&is=69f5abc5&hm=bffba007a830e4922d4182ac94d908019bb4fee16fcff17f3a9eb8a567791892&=&format=webp&quality=lossless&width=1898&height=1265", // Link logo Zura
    
    // Phiên bản hỗ trợ
    versions: {
        java: "1.7-1.21.11",
        bedrock: "Hỗ trợ bản mới nhất"
    },

    // Nền Minecraft
    bgImage: "https://a.storyblok.com/f/296405/1920X1080/85c8f43648/cherry-blossom-grove-in-minecraft.jpg", 

    // Liên hệ
    social: {
        facebook: "https://m.me/j/AbZuniz70Xzx93iR/?send_source=gc:copy_invite_link_c",
        discord: "https://discord.gg/DfKWbDMTa3"
    },

    // Giới thiệu
    about: [
        { icon: "fa-coins", title: "Kinh Tế Cân Bằng", desc: "Hệ thống mua bán, cày cuốc hợp lý, không lạm phát." },
        { icon: "fa-users", title: "Cộng Đồng Thân Thiện", desc: "Nơi giao lưu, kết bạn và tham gia event hấp dẫn." },
        { icon: "fa-server", title: "Server Ổn Định", desc: "Ping xanh mượt mà, cấu hình máy chủ khủng." }
    ],

    // Luật Server
    rules: [
        "Không sử dụng Hack, Cheat, X-Ray hay các Mod gây mất cân bằng game.",
        "Không toxic, chửi bậy, lừa đảo hay xúc phạm người chơi khác.",
        "Không lợi dụng Bug/Lỗi game. Báo cáo Bug để nhận thưởng.",
        "Tôn trọng Ban Quản Trị và quyết định của Staff.",
        "Không quảng cáo server khác dưới mọi hình thức."
    ],

    // Quyền lợi VIP (Tự động dàn trang dù có nhiều hạng)
    // kitImage: link ảnh quà tặng/kit hằng ngày của rank đó
    ranks: [
        { id: "vip", name: "VIP", color: "#d1d5db", popular: false, kitImage: "https://cdn.discordapp.com/attachments/1477737403723677949/1482718238356799699/Messenger_creation_23115372-9938-4071-9C3E-156AAC010B0C.jpg?ex=69f74077&is=69f5eef7&hm=e6bd963b81564b524329392f57d2ba90441783ad0e4a81aaeeed9c990ca67ff5&", features: ["/chatcolor gold", "/pv 1", "Nhận thêm 2 sethome", "Bộ kit nhận hằng ngày VIP"] },
        { id: "vip+", name: "VIP+", color: "#cd7f32", popular: false, kitImage: "https://cdn.discordapp.com/attachments/1477737403723677949/1482728917713420479/Messenger_creation_01D180F4-A648-4007-8292-229F00B5B347.jpg?ex=69f6a1a9&is=69f55029&hm=089439f3933203a67582f5d437c2a7b487ec16c363943a0cd2c2cf8a9150047f&", features: ["/chatcolor {gold,blue}", "/pv {1,2}", "Cộng thêm 2 sethome", "Bộ kit nhận hằng ngày VIP+"] },
        { id: "svip", name: "SVIP", color: "#9ca3af", popular: false, kitImage: "https://cdn.discordapp.com/attachments/1477737403723677949/1482731604353876098/Messenger_creation_817DC6FF-AAD8-46D2-AFD4-D5E7D7D05819.jpg?ex=69f6a42a&is=69f552aa&hm=4bfb05baed2183735f29566b3882a40237e95d947cbd9d4f13afe9e95117c35f&", features: ["/chatcolor {gold,blue,yellow}", "/pv {1,2,3}", "/nick (đổi tên hiển thị có thể đổi tên màu in đậm gạch ngang tuỳ thích)", "Nhận thêm 2 sethome", "Bộ kit nhận hằng ngày SVIP"] },
        { id: "svip+", name: "SVIP+", color: "#f59e0b", popular: false, kitImage: "https://cdn.discordapp.com/attachments/1477737403723677949/1482734008537321605/Messenger_creation_BF781015-7F8A-488A-A654-C97C2BF312EE.jpg?ex=69f6a667&is=69f554e7&hm=b92d934c7f03d0843e97e2a944e344309c1645924995333fbdfc2a25e7335afc&", features: ["/chatcolor {gold,blue,yellow,lime}", "/pv {1,2,3,4,5}", "/nick (đổi tên hiển thị có thể đổi tên màu in đậm gạch ngang tuỳ thích)", "/ie rename (đổi tên cho vật phẩm cầm trên tay - có thể đổi màu tên)", "Nhận được thêm 3 sethome", "Bộ kit nhận hằng ngày SVIP+"] },
        { id: "mvip", name: "MVIP", color: "#06b6d4", popular: false, kitImage: "https://cdn.discordapp.com/attachments/1477737403723677949/1482737289812508876/Messenger_creation_BABDCE67-1EC9-43B7-94B3-8F9D01EEA442.jpg?ex=69f6a975&is=69f557f5&hm=01f82a5319e4f0aab0096b805208fcde70449c46d9a181d32bc1594b88fb1d6b&", features: ["/chatcolor {gold,blue,yellow,lime,pink}", "/pv {1,2,3,4,5,6,7}", "/nick (đổi tên hiển thị có thể đổi tên màu in đậm gạch ngang tuỳ thích)", "/hat (đội vật phẩm đang cầm trên tay)", "/beezooka (đại bác ong ??)", "/kittycanon (pháo mèo ??)", "/near (xem ai đang gần mình nhất)", "/invsee {tên người chơi} (xem túi đồ của người chơi khác nhưng không thể lấy đồ 🗿)", "/claimfly (bay trong claim)", "/ie rename (đổi tên cho vật phẩm cầm trên tay - có thể đổi màu tên)", "Nhận được 3 sethome", "Bộ kit nhận hằng ngày MVIP"] },
        { id: "mvip+", name: "MVIP+", color: "#10b981", popular: true, kitImage: "https://cdn.discordapp.com/attachments/1477737403723677949/1482743267236773908/Messenger_creation_4BCDB79D-2760-4EA8-BB71-DAE23BAF64D0.jpg?ex=69f6af06&is=69f55d86&hm=46abb8ef36ee5c51701d9528f801764147c0d3c335f22c8efb3fb98558a60556&", features: ["/chatcolor {gold,blue,yellow,lime,pink,darkred}", "/pv {1,2,3,4,5,6,7,8,9,10}", "/nick (đổi tên hiển thị có thể đổi tên màu in đậm gạch ngang tuỳ thích)", "/hat (đội vật phẩm đang cầm trên tay)", "/beezooka (đại bác ong ??)", "/kittycanon (pháo mèo ??)", "/near (xem ai đang gần mình nhất)", "/invsee {tên người chơi} (xem túi đồ của người chơi khác nhưng không thể lấy đồ 🗿)", "/anvil (sử dụng đe bằng lệnh)", "/smithingtable (sử dụng bàn rèn bằng lệnh)", "/bottom (dịch chuyển xuống dưới gần nhất)", "/top (dịch chuyển lên đầu)", "/condense (lập tức đổi vật phẩm có thể chế thành khối ra khối)", "/claimfly (bay trong claim)", "/ie rename (đổi tên cho vật phẩm cầm trên tay - có thể đổi màu tên)", "Nhận 3 sethome", "Bộ kit nhận hằng ngày MVIP+"] }
    ],

    // Hướng dẫn
    guides: [
        { title: "Làm sao để kiếm tiền?", content: "Bạn có thể farm quái, thu hoạch nông sản và dùng /sellgui để bán hoặc đánh tài xỉu, coinflip." },
        { title: "Cách claim đất bảo vệ nhà", content: "Sử dụng xẻng vàng, click chuột phải vào 2 góc chéo nhau để tạo vùng bảo vệ." },
        { title: "Làm sao để nhận quà khởi đầu?", content: "Gõ lệnh /code WELCOME trong game để nhận 20k money nhé." }
    ],

    // Bảng giá
    pricing: [
        { item: "VIP", price: "50 points" },
        { item: "VIP+", price: "60 points (CẦN RANK VIP)" },
        { item: "SVIP", price: "70 points (CẦN RANK VIP+)" },
        { item: "SVIP+", price: "80 points (CẦN RANK SVIP)" },
        { item: "MVIP", price: "100 points (CẦN RANK SVIP+)" },
        { item: "MVIP+", price: "140 points (CẦN RANK MVIP)" },
    ]
};

const CONFIG = {
    // Thông tin chung
    serverName: "ZURA",
    serverNameHighlight: "COMMUNITY",
    serverSlogan: "Cộng Đồng Sinh Tồn Đỉnh Cao",
    serverIP: "zura.wtf", // IP dùng để check trạng thái luôn
    logoUrl: "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/649275518_970915278940887_7208028772258560161_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGG02mfklQhak-jFZTVmKqA0f2PNht6iwjR_Y82G3qLCJVZ16bZWxFSSucXE6HjPFLxIiwLSUw4MiSXStNjul5l&_nc_ohc=GJZejmqSQe4Q7kNvwE05uNz&_nc_oc=AdpGOL3SslvjPKI2KAojWmMZIrn2XElxxLXNpcNsqS8ossvM_ET8I57To7R8nmZqJQ8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsgn3-1.fna&_nc_ss=8&oh=03_Q7cD4wEB94FX5wyWT8kabsCwwBDFly0-N1y1MgKJgtVJkwiW1w&oe=69E36EEE", // Link logo Zura
    
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
        { id: "vip", name: "VIP", color: "#d1d5db", popular: false, kitImage: "https://cdn.discordapp.com/attachments/1477737403723677949/1482718238356799699/Messenger_creation_23115372-9938-4071-9C3E-156AAC010B0C.jpg?ex=69be8ff7&is=69bd3e77&hm=eae8f243e3a993080451585021e5fc9919678e8de10ec8ef337457896fac07da&", features: ["/chatcolor gold", "/pv 1", "Nhận thêm 2 sethome", "Bộ kit nhận hằng ngày VIP"] },
        { id: "vip+", name: "VIP+", color: "#cd7f32", popular: false, kitImage: "https://cdn.discordapp.com/attachments/1477737403723677949/1482728917713420479/Messenger_creation_01D180F4-A648-4007-8292-229F00B5B347.jpg?ex=69be99e9&is=69bd4869&hm=b1633c354b003d1f3e2ccca8ade54874f25ecdcdd6f974f8ef987c194add94cc&", features: ["/chatcolor {gold,blue}", "/pv {1,2}", "Cộng thêm 2 sethome", "Bộ kit nhận hằng ngày VIP+"] },
        { id: "svip", name: "SVIP", color: "#9ca3af", popular: false, kitImage: "https://cdn.discordapp.com/attachments/1477737403723677949/1482731604353876098/Messenger_creation_817DC6FF-AAD8-46D2-AFD4-D5E7D7D05819.jpg?ex=69be9c6a&is=69bd4aea&hm=8b56278da932baa1b97073cdeff8050b348a329bb8c861c439d6d2a5cc0f99ec&", features: ["/chatcolor {gold,blue,yellow}", "/pv {1,2,3}", "/nick (đổi tên hiển thị có thể đổi tên màu in đậm gạch ngang tuỳ thích)", "Nhận thêm 2 sethome", "Bộ kit nhận hằng ngày SVIP"] },
        { id: "svip+", name: "SVIP+", color: "#f59e0b", popular: false, kitImage: "https://cdn.discordapp.com/attachments/1477737403723677949/1482734008537321605/Messenger_creation_BF781015-7F8A-488A-A654-C97C2BF312EE.jpg?ex=69be9ea7&is=69bd4d27&hm=f4574b2f852197505649916a5ebf9d006709f453d1107152fc587560488fa85c&", features: ["/chatcolor {gold,blue,yellow,lime}", "/pv {1,2,3,4,5}", "/nick (đổi tên hiển thị có thể đổi tên màu in đậm gạch ngang tuỳ thích)", "/ie rename (đổi tên cho vật phẩm cầm trên tay - có thể đổi màu tên)", "Nhận được thêm 3 sethome", "Bộ kit nhận hằng ngày SVIP+"] },
        { id: "mvip", name: "MVIP", color: "#06b6d4", popular: false, kitImage: "https://cdn.discordapp.com/attachments/1477737403723677949/1482737289812508876/Messenger_creation_BABDCE67-1EC9-43B7-94B3-8F9D01EEA442.jpg?ex=69bea1b5&is=69bd5035&hm=637379b62323347bf8b8759eb06d041776e2ba78da0e710d564d55442310afe5&", features: ["/chatcolor {gold,blue,yellow,lime,pink}", "/pv {1,2,3,4,5,6,7}", "/nick (đổi tên hiển thị có thể đổi tên màu in đậm gạch ngang tuỳ thích)", "/hat (đội vật phẩm đang cầm trên tay)", "/beezooka (đại bác ong ??)", "/kittycanon (pháo mèo ??)", "/near (xem ai đang gần mình nhất)", "/invsee {tên người chơi} (xem túi đồ của người chơi khác nhưng không thể lấy đồ 🗿)", "/claimfly (bay trong claim)", "/ie rename (đổi tên cho vật phẩm cầm trên tay - có thể đổi màu tên)", "Nhận được 3 sethome", "Bộ kit nhận hằng ngày MVIP"] },
        { id: "mvip+", name: "MVIP+", color: "#10b981", popular: true, kitImage: "https://cdn.discordapp.com/attachments/1477737403723677949/1482743267236773908/Messenger_creation_4BCDB79D-2760-4EA8-BB71-DAE23BAF64D0.jpg?ex=69bdfe86&is=69bcad06&hm=f5d2e398992a1459e7a33a3c6f4513c156a7eab4d2a6f10198930ccc7c9ef11f&", features: ["/chatcolor {gold,blue,yellow,lime,pink,darkred}", "/pv {1,2,3,4,5,6,7,8,9,10}", "/nick (đổi tên hiển thị có thể đổi tên màu in đậm gạch ngang tuỳ thích)", "/hat (đội vật phẩm đang cầm trên tay)", "/beezooka (đại bác ong ??)", "/kittycanon (pháo mèo ??)", "/near (xem ai đang gần mình nhất)", "/invsee {tên người chơi} (xem túi đồ của người chơi khác nhưng không thể lấy đồ 🗿)", "/anvil (sử dụng đe bằng lệnh)", "/smithingtable (sử dụng bàn rèn bằng lệnh)", "/bottom (dịch chuyển xuống dưới gần nhất)", "/top (dịch chuyển lên đầu)", "/condense (lập tức đổi vật phẩm có thể chế thành khối ra khối)", "/claimfly (bay trong claim)", "/ie rename (đổi tên cho vật phẩm cầm trên tay - có thể đổi màu tên)", "Nhận 3 sethome", "Bộ kit nhận hằng ngày MVIP+"] }
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

// Centralized Data State with 10+ Diverse Machines, Advanced AI Support & Selectable Payment Steps
const state = {
    currentRole: 'customer',
    activeTab: 'home',
    searchQuery: '',
    selectedCategory: 'All', 
    selectedType: 'All',     
    viewLayout: 'grid',      
    ownerViewLayout: 'grid',
    selectedEquipmentId: null,
    authUser: null,
    favorites: ['EQ-101'],
    navigationStack: [],
    currency: 'ETB',
    language: 'en',

    exchangeRates: {
        ETB: 1,
        USD: 0.0075,
        EUR: 0.0069
    },

    currencySymbols: {
        ETB: 'Br',
        USD: '$',
        EUR: '€'
    },

    translations: {
        en: {
            enterprise_title: 'EquipLink Ethiopia',
            nav_profile: 'Profile & Enterprise KYC',
            nav_favorites: 'Favorite Equipment (❤️ / ⭐)',
            nav_orders: 'Order Activity & Telemetry',
            nav_transactions: 'Transaction History, Telebirr & CBE',
            nav_ai: 'OpenAI Assistant Support',
            nav_settings: 'Global Settings & API',
            signout: 'Sign Out',
            subtitle: 'Cross-Border Machinery Hub',
            ai_support_btn: 'OpenAI Assistant',
            customer_mode: 'Customer Mode',
            owner_mode: 'Owner Mode',
            auth_subtitle: 'Equipment Marketplace supported with OpenAI AI & Local Payments',
            welcome_back: 'Welcome back',
            signin_desc: 'Sign in to your account or access demo logins.',
            quick_demo: 'Quick Demo Accounts',
            userid_phone: 'User ID or Phone',
            password: 'Password',
            forgot_password: 'Forgot Password?',
            signin_btn: 'SIGN IN TO ACCOUNT',
            no_account: "Don't have an account?",
            register_now: 'Register Now',
            create_account: 'Create Account & Verify',
            register_desc: 'Provide Fayda FAN/FIN number for instant OTP verification.',
            choose_acc_type: 'Choose Account Type',
            role_customer: 'Customer',
            role_owner: 'Owner',
            role_both: 'Both',
            fullname: 'Full Name',
            gender: 'Gender',
            male: 'Male',
            female: 'Female',
            company_name: 'Company / Business Name',
            phone: 'Phone (+251)',
            tin_number: 'TIN Number',
            address: 'Address / Subcity',
            fayda_fan_label: 'Fayda FAN or FIN Number',
            get_otp: 'Get OTP',
            fayda_fan_desc: 'National ID verification via official Fayda registry.',
            submit_verif: 'VERIFY FAYDA & REGISTER',
            already_registered: 'Already registered?',
            back_to_login: 'Back to Login',
            forgot_title: 'Forgot Password?',
            forgot_desc: 'Enter your User ID or phone number to reset access.',
            send_reset: 'SEND RESET CODE',
            back_login_btn: '← Back to Login',
            verify_phone: 'Verify Phone & Fayda',
            enter_otp_sent: 'Enter OTP code sent to',
            demo_otp: 'Demo OTP Code:',
            verify_confirm: 'VERIFY & CONFIRM',
            customer_portal: 'Customer Rental Portal',
            tab_home: 'Home',
            tab_search: 'Search',
            tab_bookings: 'Bookings',
            tab_notifications: 'Notification',
            owner_portal: 'Owner Fleet Portal',
            verified_supplier: 'Verified Machine Supplier',
            list_machine: 'List Machine',
            tab_overview: 'Overview',
            tab_fleet: 'My Fleet',
            tab_requests: 'Requests',
            admin_dashboard: 'EquipLink Admin Control Dashboard',
            admin_desc: 'Marketplace Management, Owner Verification & Document Inspection',
            admin_granted: 'Admin Privileged Access Granted',
            stat_users: 'Total users',
            stat_machines: 'Machines',
            stat_rentals: 'Active rentals',
            stat_revenue: 'Platform review',
            stat_pending: 'Pending review',
            stat_disputes: 'Open dispute',
            open_list: 'Open list →',
            analytics_title: 'Platform Growth & Revenue Analytics',
            close: 'Close ✕',
            verif_queue: 'Owner & Machine Verification Queue (Inspect Attachments)',
            th_eq_owner: 'Equipment / Owner',
            th_location: 'Location',
            th_tin_lic: 'TIN & License',
            th_status: 'Status',
            th_actions: 'Actions',
            disputes_queue: 'Open Disputes Queue',
            ai_copilot_title: 'OpenAI Assistant Support',
            ai_copilot_subtitle: 'App & Telematics Advisor',
            ai_greeting: 'Hello! I am your advanced OpenAI Assistant assistant for EquipLink. Ask me anything about our machines, operational status, pricing, or agreements (Passwords & keys strictly protected).',
            send: 'Send',
            request_rental: 'Request Equipment Rental',
            request_desc: 'Fill in dates, operating hours and complete payment via Telebirr or CBE.',
            work_site: 'Work Location Site',
            start_date: 'Start Date',
            end_date: 'End Date',
            daily_hours: 'Est. Daily Operating Hours',
            include_op: 'Include Operator?',
            op_yes: 'Yes (+3,500 ETB/day)',
            op_no: 'No (Own Operator)',
            select_payment: 'Select Local Payment Method',
            attach_rental_docs: 'Attach Verification Document (License / Fayda)',
            base_rental: 'Base Equipment Rental:',
            operator_fee: 'Operator Fee:',
            transport_fee: 'Transport Mobilization:',
            platform_fee: 'EquipLink Fee (7%):',
            total_cost: 'Total Estimated Cost:',
            pay_submit_rental: 'PAY & SEND RENTAL REQUEST',
            list_new_machine: 'List New Heavy Equipment',
            list_new_desc: 'Provide machine specs, 6 photo angles, and attach ownership verification documents.',
            eq_name: 'Equipment Name / Title',
            category: 'Category',
            machine_type_label: 'Machine Type',
            serial_no: 'Serial Number',
            prod_year: 'Production Year',
            op_hours: 'Operational Hours Logged',
            location_hub: 'Location Hub',
            hourly_rate: 'Hourly Rate',
            daily_rate: 'Daily Rate',
            attach_owner_docs: 'Attach Ownership & Machine Registration Document',
            machine_photos: 'Machine Photos (Camera / File Attach - 6 Angles)',
            p_front: 'Front Photo',
            p_back: 'Back Photo',
            p_flh: 'Front & LH',
            p_frh: 'Front & RH',
            p_blh: 'Back & LH',
            p_brh: 'Back & RH',
            submit_verif_machine: 'SUBMIT MACHINE FOR VERIFICATION',
            report_breakdown: 'Report Machine Breakdown',
            issue_cat: 'Issue Category',
            iss_hyd: 'Hydraulic System Failure',
            iss_eng: 'Engine / Overheating Issue',
            iss_elec: 'Electrical / Sensor Problem',
            iss_track: 'Tracks / Undercarriage Damage',
            prob_desc: 'Problem Description',
            submit_ticket: 'SUBMIT URGENT TICKET TO ADMIN',
            admin_verify_title: 'Admin Verification Inspection & Message Box'
        },
        om: {
            enterprise_title: 'EquipLink Ethiopia',
            nav_profile: 'Profaayilii & KYC',
            nav_favorites: 'Meeshalee Jaallataman',
            nav_orders: 'Sochii Ajajaa & Telematics',
            nav_transactions: 'Seenaa Dabarsaa, Telebirr & CBE',
            nav_ai: 'Deeggarsa OpenAI AI',
            nav_settings: 'Qindaa’ina & API',
            signout: 'Ba’i',
            subtitle: 'Giddugala Kiraa Maashinii Itiyoophiyaa',
            ai_support_btn: 'OpenAI Assistant',
            customer_mode: 'Mode Maamilaa',
            owner_mode: 'Mode Abbaa Qabeenyaa',
            auth_subtitle: 'Gabaa Meeshaalee OpenAI AI fi Kaffaltii Naannoo wajjin',
            welcome_back: 'Baga nagaan deebitan',
            signin_desc: 'Akkaawuntii keessaniin seenaa.',
            quick_demo: 'Akkaawuntii Demo',
            userid_phone: 'ID ykn Bilbila',
            password: 'Jecha Darbi',
            forgot_password: 'Jecha Darbi irraanfattee?',
            signin_btn: 'SEENI',
            no_account: 'Akkaawuntii hin qabduu?',
            register_now: 'Galmaa’i',
            create_account: 'Akkaawuntii Uumii & Mirkaneessi',
            register_desc: 'Lakkoofsa Fayda FAN/FIN OTPf galchaa.',
            choose_acc_type: 'Gosa Akkaawuntii',
            role_customer: 'Maamila',
            role_owner: 'Abbaa Qabeenyaa',
            role_both: 'Lamaanuu',
            fullname: 'Maqaa Guutuu',
            gender: 'Saala',
            male: 'Dhiira',
            female: 'Dhalaa',
            company_name: 'Maqaa Dhaabbataa',
            phone: 'Bilbila (+251)',
            tin_number: 'TIN',
            address: 'Teessoo',
            fayda_fan_label: 'Lakkoofsa Fayda FAN ykn FIN',
            get_otp: 'OTP Argadhu',
            fayda_fan_desc: 'Mirkaneessa Fayda.',
            submit_verif: 'MIRKANEESSI & GALMAA’I',
            already_registered: 'Galmaa’ofteettaa?',
            back_to_login: 'Gara Seensaa Deebi’i',
            forgot_title: 'Jecha Darbi Irraanfattee?',
            forgot_desc: 'ID ykn bilbila galchaa.',
            send_reset: 'Ergi',
            back_login_btn: '← Deebi’i',
            verify_phone: 'Bilbila Mirkaneessi',
            enter_otp_sent: 'OTP ergame galchaa',
            demo_otp: 'Demo OTP:',
            verify_confirm: 'MIRKANEESSI',
            customer_portal: 'Gejjiba Maamilaa',
            tab_home: 'Mana',
            tab_search: 'Barbaadi',
            tab_bookings: 'Qabannoo',
            tab_notifications: 'Beeksisa',
            owner_portal: 'Gejjiba Abbaa Qabeenyaa',
            verified_supplier: 'Dhiyeessaa Mirkanaa’e',
            list_machine: 'Meeshaa Galchi',
            tab_overview: 'Ibsa',
            tab_fleet: 'Meeshaalee Koo',
            tab_requests: 'Gaaffiiwwan',
            admin_dashboard: 'Daashboordi Bulchiinsaa',
            admin_desc: 'Bulchiinsa Gabaa',
            admin_granted: 'Hayyamni Kennameera',
            stat_users: 'Maamiltoota',
            stat_machines: 'Meeshaalee',
            stat_rentals: 'Kiree',
            stat_revenue: 'Gamaaggama',
            stat_pending: 'Kan Eegamu',
            stat_disputes: 'Walitti Bu’insa',
            open_list: 'Tarree Bani →',
            analytics_title: 'Guddina Gabaa',
            close: 'Cufi ✕',
            verif_queue: 'Tarree Mirkaneessaa',
            th_eq_owner: 'Meeshaa / Abbaa',
            th_location: 'Teessoo',
            th_tin_lic: 'TIN & Layisinii',
            th_status: 'Haala',
            th_actions: 'Gochaalee',
            disputes_queue: 'Tarree Walitti Bu’insaa',
            ai_copilot_title: 'Deeggarsa OpenAI AI',
            ai_copilot_subtitle: 'Gorsaa',
            ai_greeting: 'Akkam! Gaaffii appii qofaaf deebisaa.',
            send: 'Ergi',
            request_rental: 'Kireeffachuu Gaafadhaa',
            request_desc: 'Kaffaltii Telebirr ykn CBE-n raawwadhaa.',
            work_site: 'Bakka Hojii',
            start_date: 'Guyyaa Eegaltuu',
            end_date: 'Guyyaa Xumuraa',
            daily_hours: 'Sa’aatii Hojii',
            include_op: 'Ogeessa Dabaluu?',
            op_yes: 'Eeyyee (+3,500 ETB)',
            op_no: 'Lakki',
            select_payment: 'Malli Kaffaltii',
            attach_rental_docs: 'Sanada Mirkaneessaa',
            base_rental: 'Kiree Bu’uuraa:',
            operator_fee: 'Gatii Ogeessa:',
            transport_fee: 'Gejjiba:',
            platform_fee: 'Kaffaltii EquipLink:',
            total_cost: 'Baasii Waliigalaa:',
            pay_submit_rental: 'KAFFALII & GAARII ERGI',
            list_new_machine: 'Meeshaa Haaraa Galchi',
            list_new_desc: 'Ibsa meeshaalee guutaa.',
            eq_name: 'Maqaa Meeshaalee',
            category: 'Kutaalee',
            machine_type_label: 'Gosa Meeshaalee',
            serial_no: 'Seriyaalii',
            prod_year: 'Bara Oomishaa',
            op_hours: 'Sa’aatii Hojii',
            location_hub: 'Teessoo',
            hourly_rate: 'Gatii Sa’aatii',
            daily_rate: 'Gatii Guyyaa',
            attach_owner_docs: 'Sanada Abbaa Qabeenyaa',
            machine_photos: 'Suuraalee Meeshaalee',
            p_front: 'Fuuldura',
            p_back: 'Duuba',
            p_flh: 'Fuuldura & Bitaa',
            p_frh: 'Fuuldura & Mirga',
            p_blh: 'Duuba & Bitaa',
            p_brh: 'Duuba & Mirga',
            submit_verif_machine: 'MIRKANEESSUUF ERGI',
            report_breakdown: 'Miidhama Gabaasi',
            issue_cat: 'Gosa Rakkoo',
            iss_hyd: 'Hayidiroolikii',
            iss_eng: 'Injiniinii',
            iss_elec: 'Elektirikii',
            iss_track: 'Kaarmii',
            prob_desc: 'Ibsa Rakkoo',
            submit_ticket: 'BULCHIINSUUF ERGI',
            admin_verify_title: 'Sakatta’iinsa Mirkaneessaa'
        },
        am: {
            enterprise_title: 'EquipLink Ethiopia',
            nav_profile: 'የተጠቃሚ መገለጫ እና ኪአይሲ',
            nav_favorites: 'ተወዳጅ ማሽኖች',
            nav_orders: 'የትዕዛዝ ታሪክ',
            nav_transactions: 'የግብይት ታሪክ፣ ቴሌብር እና CBE',
            nav_ai: 'OpenAI Assistant ድጋፍ',
            nav_settings: 'ቅንብሮች',
            signout: 'ውጣ',
            subtitle: 'የኢትዮጵያ ማሽኖች የኪራይ ማዕከል',
            ai_support_btn: 'OpenAI Assistant',
            customer_mode: 'የተከራይ ሁኔታ',
            owner_mode: 'የባለቤት ሁኔታ',
            auth_subtitle: 'ከባድ ማሽኖች ገበያ በOpenAI AI እና በಸ್ಥానిక ክፍያዎች',
            welcome_back: 'እንኳን ደህና መጡ',
            signin_desc: 'በመለያዎ ይግቡ።',
            quick_demo: 'ፈጣን የሙከራ መለያዎች',
            userid_phone: 'መለያ ቁጥር ወይም ስልክ',
            password: 'የሚስጥር ቁጥር',
            forgot_password: 'የሚስጥር ቁጥር ረስተዋል?',
            signin_btn: 'ይግቡ',
            no_account: 'መለያ የለዎትም?',
            register_now: 'ይመዝገቡ',
            create_account: 'መለያ ይፍጠሩ',
            register_desc: 'የፋይዳ FAN ወይም FIN ቁጥር ለአስተማማኝ ማረጋገጫ ያስገቡ።',
            choose_acc_type: 'የመለያ ዓይነት',
            role_customer: 'ተከራይ',
            role_owner: 'ባለቤት',
            role_both: 'ሁለቱም',
            fullname: 'ሙሉ ስም',
            gender: 'ጾታ',
            male: 'ወንድ',
            female: 'ሴት',
            company_name: 'የኩባንያ ስም',
            phone: 'ስልክ ቁጥር',
            tin_number: 'ቲን ቁጥር',
            address: 'አድራሻ',
            fayda_fan_label: 'የፋይዳ FAN ወይም FIN ቁጥር',
            get_otp: 'OTP አግኝ',
            fayda_fan_desc: 'በኦፊሴላዊ የፋይዳ መዝገብ ማረጋገጫ።',
            submit_verif: 'ፋይዳን አረጋግጥ እና ተመዝገብ',
            already_registered: 'ተመዝግበዋል?',
            back_to_login: 'ወደ መግቢያ ተመለስ',
            forgot_title: 'የሚስጥር ቁጥር ረስተዋል?',
            forgot_desc: 'መለያ ቁጥር ያስገቡ።',
            send_reset: 'ላክ',
            back_login_btn: '← ተመለስ',
            verify_phone: 'ስልክ ያረጋግጡ',
            enter_otp_sent: 'የተላከውን OTP ያስገቡ',
            demo_otp: 'የሙከራ OTP:',
            verify_confirm: 'አረጋግጥ',
            customer_portal: 'የተከራይ መድረክ',
            tab_home: 'መነሻ',
            tab_search: 'ፈልግ',
            tab_bookings: 'ቦታዎች',
            tab_notifications: 'ማስታወቂያ',
            owner_portal: 'የባለቤት መድረክ',
            verified_supplier: 'የተረጋገጠ አቅራቢ',
            list_machine: 'ማሽን አስመዝግብ',
            tab_overview: 'አጠቃላይ',
            tab_fleet: 'ማሽኖቼ',
            tab_requests: 'ጥያቄዎች',
            admin_dashboard: 'የአስተዳደር ፓነል',
            admin_desc: 'የገበያ አስተዳደር',
            admin_granted: 'የአስተዳዳሪ ፈቃድ ተሰጥቷል',
            stat_users: 'ተጠቃሚዎች',
            stat_machines: 'ማሽኖች',
            stat_rentals: 'ንቁ ኪራዮች',
            stat_revenue: 'ገቢ',
            stat_pending: 'በምርመራ',
            stat_disputes: 'ክርክሮች',
            open_list: 'ዝርዝር ክፈት →',
            analytics_title: 'የገበያ ትንተና',
            close: 'ዝጋ ✕',
            verif_queue: 'የማረጋገጫ ወረፋ',
            th_eq_owner: 'ማሽን / ባለቤት',
            th_location: 'አድራሻ',
            th_tin_lic: 'ቲን እና ፈቃድ',
            th_status: 'ሁኔታ',
            th_actions: 'ድርጊቶች',
            disputes_queue: 'የክርክር ወረፋ',
            ai_copilot_title: 'OpenAI Assistant ድጋፍ',
            ai_copilot_subtitle: 'አማካሪ',
            ai_greeting: 'ሰላም! እኔ የEquipLink የOpenAI Assistant ረዳት ነኝ። ስለ ማሽኖች እና መተግበሪያው ማንኛውንም ጥያቄ ይጠይቁኝ።',
            send: 'ላክ',
            request_rental: 'የማሽን ኪራይ ይጠይቁ',
            request_desc: 'በቴሌብር ወይም በCBE ይክፈሉ።',
            work_site: 'የሥራ ቦታ',
            start_date: 'የመጀመሪያ ቀን',
            end_date: 'የመጨረሻ ቀን',
            daily_hours: 'ዕለታዊ ሰዓት',
            include_op: 'ኦፕሬተር?',
            op_yes: 'አዎ (+3,500 ብር)',
            op_no: 'አይ',
            select_payment: 'የክፍያ ዘዴ',
            attach_rental_docs: 'የማረጋገጫ ሰነድ ያያይዙ',
            base_rental: 'መሰረታዊ ኪራይ:',
            operator_fee: 'የኦፕሬተር ክፍያ:',
            transport_fee: 'ትራንስፖርት:',
            platform_fee: 'የEquipLink ክፍያ:',
            total_cost: 'ጠቅላላ ወጪ:',
            pay_submit_rental: 'ከፍለው ጥያቄ ይላኩ',
            list_new_machine: 'አዲስ ማሽን ያስመዝግቡ',
            list_new_desc: 'መግለጫዎችን ያስገቡ።',
            eq_name: 'የማሽን ስም',
            category: 'ምድብ',
            machine_type_label: 'የማሽን ዓይነት',
            serial_no: 'መለያ ቁጥር',
            prod_year: 'የተመረተበት ዓመት',
            op_hours: 'የተሰራበት ሰዓት',
            location_hub: 'ማዕከል',
            hourly_rate: 'በሰዓት ዋጋ',
            daily_rate: 'በቀን ዋጋ',
            attach_owner_docs: 'የባለቤትነት ሰነድ ያያይዙ',
            machine_photos: 'የማሽን ፎቶዎች (6 ማዕዘኖች)',
            p_front: 'ፊት',
            p_back: 'ኋላ',
            p_flh: 'ፊት እና ግራ',
            p_frh: 'ፊት እና ቀኝ',
            p_blh: 'ኋላ እና ግራ',
            p_brh: 'ኋላ እና ቀኝ',
            submit_verif_machine: 'ለማረጋገጫ ላክ',
            report_breakdown: 'እክል ሪፖርት አድርግ',
            issue_cat: 'የእክል ዓይነት',
            iss_hyd: 'ሃይድሮሊክ',
            iss_eng: 'ሞተር',
            iss_elec: 'ኤሌክትሪክ',
            iss_track: 'ትራክ',
            prob_desc: 'መግለጫ',
            submit_ticket: 'ቲኬት ላክ',
            admin_verify_title: 'የአስተዳደር ምርመራ'
        }
    },

    categoriesList: [
        'All',
        'Construction machine',
        'Automotive (vehicle)',
        'Agricalture machine',
        'Plant machine'
    ],

    machineTypesMap: {
        'Construction machine': ['Excavator', 'Grader', 'Dumper', 'Bulldozer', 'Compactor', 'Wheel Loader'],
        'Automotive (vehicle)': ['Toyota Hilux', 'Isuzu NPR Truck', 'Fuel Tanker', 'Dump Truck Heavy', 'Pickup 4WD'],
        'Agricalture machine': ['Tractor John Deere', 'Combine Harvester', 'Disc Plough', 'Seeder Machine'],
        'Plant machine': ['Mobile Crane 50T', 'Concrete Batching Plant', 'Diesel Generator 500KVA', 'Air Compressor']
    },

    users: [
        { userId: 'CUST-1001', name: 'Abebe Bikila', company: 'Ethiopia Infra PLC', phone: '0911000001', password: '123', role: 'customer', status: 'Active', gender: 'Male', tin: '0049281029', address: 'Bole Subcity, Addis Ababa', licenseDoc: 'Trade_License_1001.pdf', faydaFan: 'FAN-99381029' },
        { userId: 'OWN-2002', name: 'Shewa Machinery', company: 'Shewa Machinery Depot', phone: '0911000002', password: '123', role: 'owner', status: 'Active', gender: 'Male', tin: '0098310022', address: 'Akaki Kality, Addis Ababa', licenseDoc: 'Trade_License_2002.pdf', faydaFan: 'FAN-88192031' },
        { userId: 'BOTH-3003', name: 'Selam Transport', company: 'Selam Machinery & Rentals', phone: '0911000003', password: '123', role: 'both', status: 'Active', gender: 'Female', tin: '0038102911', address: 'Bishoftu Town', licenseDoc: 'Trade_License_3003.pdf', faydaFan: 'FAN-77382019' },
        { userId: 'ADMIN-999', name: 'EquipLink Admin', company: 'EquipLink Ethiopia HQ', phone: '0911000000', password: 'admin', role: 'admin', status: 'Active', gender: 'Male', tin: '0000000000', address: 'Headquarters', licenseDoc: 'Admin_License.pdf', faydaFan: 'FAN-00000000' }
    ],

    equipments: [
        {
            id: 'EQ-101',
            title: 'Hitachi ZX210 Hydraulic Excavator',
            category: 'Construction machine',
            machineType: 'Excavator',
            model: 'ZX210-5G',
            serialNumber: 'SN-HT-88392',
            productDate: '2021',
            operationalHours: 5420,
            dailyRate: 35000,
            hourlyRate: 4500,
            location: 'Bishoftu Hub',
            owner: 'Shewa Machinery Depot',
            ownerId: 'OWN-2002',
            verified: true,
            status: 'Available',
            booked: false,
            telematics: { gps: '9.0300° N, 38.7400° E', fuelBurnRate: '14.2 L/h', engineHealth: 'Optimal (98%)' },
            photos: {
                front: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=800&q=80',
                back: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
                flh: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
                frh: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
                blh: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=800&q=80',
                brh: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'
            },
            history: [{ date: '2026-10-10', event: 'Inspection Completed', client: 'Abebe Bikila', amount: 0 }]
        },
        {
            id: 'EQ-102',
            title: 'SANY STC500 50-Ton Mobile Crane',
            category: 'Plant machine',
            machineType: 'Mobile Crane 50T',
            model: 'STC500',
            serialNumber: 'SN-SNY-99120',
            productDate: '2022',
            operationalHours: 2100,
            dailyRate: 60000,
            hourlyRate: 7500,
            location: 'Addis Ababa (Bole)',
            owner: 'Selam Machinery & Rentals',
            ownerId: 'BOTH-3003',
            verified: true,
            status: 'Rented',
            booked: true,
            telematics: { gps: '8.9806° N, 38.7578° E', fuelBurnRate: '22.5 L/h', engineHealth: 'Good (95%)' },
            photos: {
                front: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
                back: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=800&q=80',
                flh: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
                frh: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
                blh: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
                brh: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'
            },
            history: [{ date: '2026-10-01', event: 'Deployed for Flyover Project', client: 'Birhan Developers', amount: 420000 }]
        },
        {
            id: 'EQ-103',
            title: 'Caterpillar 14M Motor Grader',
            category: 'Construction machine',
            machineType: 'Grader',
            model: '14M-Series',
            serialNumber: 'SN-CAT-11239',
            productDate: '2020',
            operationalHours: 6200,
            dailyRate: 40000,
            hourlyRate: 5000,
            location: 'Adama Hub',
            owner: 'Shewa Machinery Depot',
            ownerId: 'OWN-2002',
            verified: true,
            status: 'On Progress',
            booked: true,
            telematics: { gps: '8.5400° N, 39.2700° E', fuelBurnRate: '16.8 L/h', engineHealth: 'Good (92%)' },
            photos: {
                front: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
                back: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=800&q=80',
                flh: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
                frh: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
                blh: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
                brh: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=800&q=80'
            },
            history: [{ date: '2026-10-05', event: 'Maintenance and blade calibration', client: 'Adama Highway', amount: -8500 }]
        },
        {
            id: 'EQ-104',
            title: 'Komatsu D85EX Bulldozer',
            category: 'Construction machine',
            machineType: 'Bulldozer',
            model: 'D85EX-18',
            serialNumber: 'SN-KMT-55412',
            productDate: '2023',
            operationalHours: 1400,
            dailyRate: 48000,
            hourlyRate: 6000,
            location: 'Hawassa Site',
            owner: 'Selam Machinery & Rentals',
            ownerId: 'BOTH-3003',
            verified: true,
            status: 'Available',
            booked: false,
            telematics: { gps: '7.0500° N, 38.4700° E', fuelBurnRate: '19.4 L/h', engineHealth: 'Excellent (99%)' },
            photos: {
                front: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
                back: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
                flh: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
                frh: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=800&q=80',
                blh: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
                brh: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80'
            },
            history: [{ date: '2026-09-20', event: 'Registered to Platform', client: 'Selam Rentals', amount: 0 }]
        },
        {
            id: 'EQ-105',
            title: 'Toyota Hilux 4WD Double Cabin',
            category: 'Automotive (vehicle)',
            machineType: 'Toyota Hilux',
            model: 'GD-6 2024',
            serialNumber: 'SN-TYT-90812',
            productDate: '2024',
            operationalHours: 12000,
            dailyRate: 8500,
            hourlyRate: 1200,
            location: 'Addis Ababa HQ',
            owner: 'Shewa Machinery Depot',
            ownerId: 'OWN-2002',
            verified: true,
            status: 'Available',
            booked: false,
            telematics: { gps: '9.0200° N, 38.7500° E', fuelBurnRate: '9.2 L/h', engineHealth: 'Optimal (97%)' },
            photos: {
                front: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
                back: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
                flh: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
                frh: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
                blh: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
                brh: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
            },
            history: [{ date: '2026-10-02', event: 'Routine oil service', client: 'Shewa Fleet', amount: -3500 }]
        },
        {
            id: 'EQ-106',
            title: 'Isuzu NPR Heavy Duty Cargo Truck',
            category: 'Automotive (vehicle)',
            machineType: 'Isuzu NPR Truck',
            model: 'NPR-75',
            serialNumber: 'SN-ISZ-44321',
            productDate: '2021',
            operationalHours: 28000,
            dailyRate: 14000,
            hourlyRate: 2000,
            location: 'Modjo Dry Port',
            owner: 'Selam Machinery & Rentals',
            ownerId: 'BOTH-3003',
            verified: true,
            status: 'Rented',
            booked: true,
            telematics: { gps: '8.5900° N, 39.1200° E', fuelBurnRate: '12.5 L/h', engineHealth: 'Good (90%)' },
            photos: {
                front: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
                back: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
                flh: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
                frh: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
                blh: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
                brh: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80'
            },
            history: [{ date: '2026-09-28', event: 'Long haul logistics lease', client: 'Ethio Trans', amount: 140000 }]
        },
        {
            id: 'EQ-107',
            title: 'John Deere 6150M Agricultural Tractor',
            category: 'Agricalture machine',
            machineType: 'Tractor John Deere',
            model: '6150M',
            serialNumber: 'SN-JD-77890',
            productDate: '2022',
            operationalHours: 1950,
            dailyRate: 18000,
            hourlyRate: 2500,
            location: 'Debre Zeit Farm Hub',
            owner: 'Shewa Machinery Depot',
            ownerId: 'OWN-2002',
            verified: true,
            status: 'On Progress',
            booked: true,
            telematics: { gps: '8.7500° N, 38.9800° E', fuelBurnRate: '11.0 L/h', engineHealth: 'Optimal (96%)' },
            photos: {
                front: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
                back: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
                flh: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
                frh: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
                blh: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
                brh: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
            },
            history: [{ date: '2026-10-11', event: 'Harvest season deployment', client: 'AgriCorp Ethiopia', amount: 90000 }]
        },
        {
            id: 'EQ-108',
            title: 'Claas Lexion 700 Combine Harvester',
            category: 'Agricalture machine',
            machineType: 'Combine Harvester',
            model: 'Lexion-700',
            serialNumber: 'SN-CLS-33211',
            productDate: '2023',
            operationalHours: 850,
            dailyRate: 55000,
            hourlyRate: 7000,
            location: 'Bale Agricultural Zone',
            owner: 'Selam Machinery & Rentals',
            ownerId: 'BOTH-3003',
            verified: true,
            status: 'Not Active',
            booked: false,
            telematics: { gps: '7.1200° N, 39.9800° E', fuelBurnRate: '18.0 L/h', engineHealth: 'Excellent (99%)' },
            photos: {
                front: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
                back: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
                flh: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
                frh: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
                blh: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
                brh: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80'
            },
            history: [{ date: '2026-09-10', event: 'Seasonal storage check', client: 'Selam Hub', amount: 0 }]
        },
        {
            id: 'EQ-109',
            title: 'Atlas Copco Portable Diesel Generator 500KVA',
            category: 'Plant machine',
            machineType: 'Diesel Generator 500KVA',
            model: 'QAS-500',
            serialNumber: 'SN-ATC-66512',
            productDate: '2022',
            operationalHours: 3100,
            dailyRate: 22000,
            hourlyRate: 3000,
            location: 'Bahir Dar Industrial Park',
            owner: 'Shewa Machinery Depot',
            ownerId: 'OWN-2002',
            verified: true,
            status: 'Available',
            booked: false,
            telematics: { gps: '11.5900° N, 37.3900° E', fuelBurnRate: '35.0 L/h', engineHealth: 'Good (94%)' },
            photos: {
                front: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
                back: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
                flh: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
                frh: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
                blh: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
                brh: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
            },
            history: [{ date: '2026-10-04', event: 'Load bank testing', client: 'Industrial Client', amount: 44000 }]
        },
        {
            id: 'EQ-110',
            title: 'Putzmeister Mobile Concrete Batching Plant',
            category: 'Plant machine',
            machineType: 'Concrete Batching Plant',
            model: 'MPM-3000',
            serialNumber: 'SN-PTZ-88190',
            productDate: '2023',
            operationalHours: 1100,
            dailyRate: 75000,
            hourlyRate: 9500,
            location: 'Addis Ababa (Bole Ring Road)',
            owner: 'Selam Machinery & Rentals',
            ownerId: 'BOTH-3003',
            verified: true,
            status: 'On Progress',
            booked: true,
            telematics: { gps: '8.9900° N, 38.7900° E', fuelBurnRate: '40.0 L/h', engineHealth: 'Optimal (98%)' },
            photos: {
                front: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
                back: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=800&q=80',
                flh: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
                frh: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=800&q=80',
                blh: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
                brh: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'
            },
            history: [{ date: '2026-10-08', event: 'Pouring foundation mix', client: 'Mega Towers PLC', amount: 225000 }]
        }
    ],

    bookings: [
        {
            id: 'EL-10254',
            equipmentId: 'EQ-101',
            equipmentName: 'Hitachi ZX210 Excavator',
            customerName: 'Abebe Bikila',
            ownerName: 'Shewa Machinery Depot',
            location: 'Bishoftu Bypass Site',
            startDate: '2026-10-10',
            endDate: '2026-10-25',
            hoursPerDay: 10,
            status: 'Active',
            paymentMethod: 'Telebirr',
            agreementType: 'Standard Heavy Equipment Commercial Lease Agreement',
            totalCost: 620600,
            platformFee: 40600
        }
    ],

    disputes: [
        {
            id: 'DSP-801',
            bookingId: 'EL-10254',
            reporter: 'Abebe Bikila',
            owner: 'Shewa Machinery Depot',
            issueType: 'Hydraulic System Failure',
            description: 'Main boom hydraulic hose ruptured during operation.',
            status: 'Under Review'
        }
    ]
};

function formatETB(amountInETB) {
    const rate = state.exchangeRates[state.currency] || 1;
    const symbol = state.currencySymbols[state.currency] || 'Br';
    const converted = amountInETB * rate;
    
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: state.currency, maximumFractionDigits: 0 })
        .format(converted)
        .replace(/[A-Z]/g, '')
        .trim() + ' ' + symbol;
}

function changeCurrency(curr) {
    state.currency = curr;
    showToast(`Currency updated to ${curr}`, 'info');
    if (state.currentRole === 'customer') setCustomerTab(state.activeTab, false);
    if (state.currentRole === 'owner') setOwnerTab(state.activeTab, false);
}

function changeLanguage(lang) {
    state.language = lang;
    showToast(`Language switched to ${lang.toUpperCase()}`, 'info');
    
    const dict = state.translations[lang] || state.translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    if (state.authUser) {
        if (state.currentRole === 'customer') setCustomerTab(state.activeTab, false);
        if (state.currentRole === 'owner') setOwnerTab(state.activeTab, false);
        if (state.currentRole === 'admin') renderAdminView();
    }
}

function localizeDate(dateStr) {
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    if (state.language === 'am') {
        return `${d.getFullYear()} ዓ.ም. ${d.getMonth() + 1}/${d.getDate()}`;
    } else if (state.language === 'om') {
        return `Guyyaa ${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
    }
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    toastMsg.textContent = message;
    
    toast.className = `fixed bottom-5 right-5 z-50 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center space-x-3 transition-all duration-300 transform translate-y-0 border backdrop-blur-xl ${
        type === 'error' ? 'bg-red-950/90 border-red-800 text-red-200' : type === 'info' ? 'bg-blue-950/90 border-blue-800 text-blue-200' : 'bg-slate-900/95 border-slate-800 text-emerald-300'
    }`;

    setTimeout(() => {
        toast.className = 'fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-xl flex items-center space-x-3 transition-all duration-300 transform translate-y-12 opacity-0 pointer-events-none';
    }, 3500);
}

function toggleDrawer(open) {
    const sidebar = document.getElementById('drawer-sidebar');
    const overlay = document.getElementById('drawer-overlay');
    if (open) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        document.getElementById('drawer-user-id').textContent = state.authUser ? state.authUser.name : 'Guest';
    } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

function openDrawerSection(section) {
    toggleDrawer(false);
    const content = document.getElementById('drawer-section-content');
    
    if (section === 'profile') {
        content.innerHTML = `
            <h3 class="font-black text-sm text-slate-900 border-b border-slate-200 pb-2">Profile, Password & Fayda KYC</h3>
            <form onsubmit="updateUserProfile(event)" class="space-y-2.5 mt-2">
                <div>
                    <label class="font-bold text-slate-700 block">Full Name</label>
                    <input type="text" id="prof-name" value="${state.authUser.name}" class="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl p-2.5">
                </div>
                <div>
                    <label class="font-bold text-slate-700 block">Company</label>
                    <input type="text" id="prof-company" value="${state.authUser.company}" class="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl p-2.5">
                </div>
                <div>
                    <label class="font-bold text-slate-700 block">Phone</label>
                    <input type="text" id="prof-phone" value="${state.authUser.phone}" class="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl p-2.5">
                </div>
                <div>
                    <label class="font-bold text-slate-700 block">New Account Password</label>
                    <input type="password" id="prof-pass" placeholder="Leave blank to keep current" class="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl p-2.5">
                </div>
                <div class="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p class="font-bold text-amber-900">Fayda FAN/FIN Verification Status</p>
                    <p class="text-[11px] text-slate-600">Status: <span class="text-emerald-600 font-bold">🟢 Verified by Registry</span></p>
                    <p class="text-[10px] text-slate-500">FAN: ${state.authUser.faydaFan || 'FAN-99381029'} | TIN: ${state.authUser.tin}</p>
                </div>
                <button type="submit" class="w-full bg-yellow-400 text-slate-900 font-bold py-2.5 rounded-xl">SAVE PROFILE & PASSWORD</button>
            </form>
        `;
    } else if (section === 'favorites') {
        const favs = state.equipments.filter(e => state.favorites.includes(e.id));
        content.innerHTML = `
            <h3 class="font-black text-sm text-slate-900 border-b border-slate-200 pb-2"><i class="fa-solid fa-heart text-red-500"></i> Favorite Equipment</h3>
            ${favs.length > 0 ? favs.map(f => `
                <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 flex justify-between items-center">
                    <div>
                        <h4 class="font-bold text-slate-900">${f.title}</h4>
                        <p class="text-slate-500">${f.location}</p>
                    </div>
                    <button onclick="viewEquipmentDetails('${f.id}')" class="bg-yellow-400 text-slate-900 font-bold px-3 py-1 rounded-lg text-xs">View</button>
                </div>
            `).join('') : '<p class="text-slate-500">No favorite equipment saved yet.</p>'}
        `;
    } else if (section === 'orders') {
        content.innerHTML = `
            <h3 class="font-black text-sm text-slate-900 border-b border-slate-200 pb-2">Order Activity & Telemetry</h3>
            ${state.bookings.map(b => `
                <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                    <p class="font-bold text-slate-900">${b.equipmentName}</p>
                    <p class="text-slate-500">Duration: ${localizeDate(b.startDate)} to ${localizeDate(b.endDate)}</p>
                    <p class="font-bold text-emerald-600">${formatETB(b.totalCost)}</p>
                </div>
            `).join('')}
        `;
    } else if (section === 'transactions') {
        content.innerHTML = `
            <h3 class="font-black text-sm text-slate-900 border-b border-slate-200 pb-2">Transaction History, Telebirr & CBE Escrow</h3>
            <button onclick="downloadTransactionsCSV()" class="mt-3 mb-3 bg-slate-900 text-white px-3 py-2 rounded-xl font-bold text-xs"><i class="fa-solid fa-download mr-1"></i> Download Transactions CSV</button>
            ${state.bookings.map(b => `
                <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 flex justify-between items-center">
                    <div>
                        <p class="font-bold text-slate-900">${b.id} (${b.paymentMethod || 'Telebirr'} Secured)</p>
                        <p class="text-slate-500">${localizeDate(b.startDate)}</p>
                    </div>
                    <div class="text-right">
                        <p class="font-black text-slate-900">${formatETB(b.totalCost)}</p>
                        <span class="text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Confirmed</span>
                    </div>
                </div>
            `).join('')}
        `;
    } else if (section === 'ai_copilot') {
        openAICopilot();
        return;
    } else if (section === 'settings') {
        content.innerHTML = `
            <h3 class="font-black text-sm text-slate-900 border-b border-slate-200 pb-2">Global Settings & API</h3>
            <p><strong>Currency:</strong> ${state.currency}</p>
            <p><strong>Language:</strong> ${state.language.toUpperCase()}</p>
            <p><strong>Telemetry WebSocket:</strong> Connected (Secure)</p>
        `;
    }

    openModal('modal-drawer-section');
}

function downloadTransactionsCSV() {
    const rows = [['Transaction ID','Equipment','Customer','Start Date','End Date','Amount ETB','Payment Method','Status']];
    (state.bookings || []).forEach(b => rows.push([b.id,b.equipmentName,b.customerName,b.startDate,b.endDate,b.totalCost,b.paymentMethod || 'Telebirr',b.status || 'Confirmed']));
    const csv = rows.map(row => row.map(v => `"${String(v ?? '').replace(/"/g,'""')}"`).join(',')).join('\r\n');
    const blob = new Blob(['\ufeff' + csv], {type:'text/csv;charset=utf-8;'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `equiplink-transactions-${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

function updateUserProfile(e) {
    e.preventDefault();
    state.authUser.name = document.getElementById('prof-name').value;
    state.authUser.company = document.getElementById('prof-company').value;
    state.authUser.phone = document.getElementById('prof-phone').value;
    const newPass = document.getElementById('prof-pass').value.trim();
    if (newPass) state.authUser.password = newPass;
    showToast('Profile and password updated successfully!', 'success');
    closeModal('modal-drawer-section');
    document.getElementById('header-user-name').textContent = state.authUser.name;
}

function openAICopilot() {
    toggleDrawer(false);
    openModal('modal-ai-copilot');
}

// EquipLink AI: searches current app data and calls the same-origin backend by default.
// You may override window.EQUIPLINK_AI_ENDPOINT before script.js loads. Never put an OpenAI API key in browser code.
function escapeAIHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function searchEquipLinkApp(question) {
    const q = question.toLowerCase();
    const matches = [];
    const add = (title, text) => matches.push({title, text});
    if (/machine|equipment|excavator|crane|tractor|fleet|catalog|available|rent|price|cost|rate|operator|location|serial/.test(q)) {
        const machines = (state.equipments || []).filter(e => {
            const blob = [e.title,e.machineType,e.category,e.location,e.status,e.owner,e.serialNumber].join(' ').toLowerCase();
            const terms = q.split(/\W+/).filter(w => w.length > 3 && !['what','which','show','tell','about','please','from','with','have','does','your','this','that'].includes(w));
            return !terms.length || terms.some(t => blob.includes(t)) || /machine|equipment|catalog|fleet|available|rent|price|cost|rate|operator|location/.test(q);
        });
        add('Equipment inventory', machines.slice(0, 30).map(e => `${e.title} (${e.machineType || e.category || 'Equipment'}); location: ${e.location}; status: ${e.status}; hourly rate: ${e.hourlyRate ?? 'not listed'} ETB; daily rate: ${e.dailyRate ?? 'not listed'} ETB; operator: ${e.operatorOption || e.operator || 'check listing'}`).join('\n') || 'No matching equipment in the current app data.');
    }
    if (/booking|rental|order|reservation|payment|transaction|telebirr|cbe|revenue|fee/.test(q)) {
        add('Bookings and transactions', (state.bookings || []).map(b => `${b.id}: ${b.equipmentName}; customer ${b.customerName}; ${b.startDate} to ${b.endDate}; total ${b.totalCost} ETB; payment ${b.paymentMethod || 'not specified'}; status ${b.status || 'not specified'}`).join('\n') || 'There are no booking records in the current app data.');
    }
    if (/user|owner|customer|account|profile|company|phone|admin|verification|fayda|kyc/.test(q)) {
        const users = (state.users || []).filter(u => !/password|secret|token|api.?key|pin/.test(q));
        add('Account and verification records', users.map(u => `${u.userId}: ${u.name}; company ${u.company}; role ${u.role}; status ${u.status}; address ${u.address}`).join('\n'));
    }
    if (/notification|request|dispute|breakdown|issue|support/.test(q)) {
        add('Requests, notifications and disputes', [
            `Disputes: ${(state.disputes || []).map(d => `${d.id || ''} ${d.title || d.description || ''} (${d.status || ''})`).join('; ') || 'No dispute records found.'}`,
            `Current role: ${state.currentRole}; active tab: ${state.activeTab}.`
        ].join('\n'));
    }
    if (/how|help|app|feature|use|register|sign.?in|search|filter|grid|list|currency|language/.test(q)) {
        add('App guidance', 'EquipLink includes Customer rental/search and booking screens, Owner fleet/equipment listing and request screens, Admin dashboard/verification/analytics, shared transaction history, settings, and AI support. Use the navigation tabs, search and filters to find records.');
    }
    return matches;
}
async function sendAIChatMessage() {
    const input = document.getElementById('ai-user-input');
    const container = document.getElementById('ai-chat-container');
    const msg = input.value.trim();
    if (!msg) return;
    container.innerHTML += `<div class="bg-yellow-100 text-slate-900 border border-yellow-200 p-3 rounded-2xl ml-4"><p class="font-bold">You:</p><p>${escapeAIHTML(msg)}</p></div>`;
    input.value = '';
    const loadingId = 'ai-loading-' + Date.now();
    container.insertAdjacentHTML('beforeend', `<div id="${loadingId}" class="bg-slate-100 text-slate-900 border border-slate-200 p-3 rounded-2xl mr-4"><p class="font-bold"><i class="fa-solid fa-wand-magic-sparkles"></i> OpenAI Assistant</p><p>Checking EquipLink data and connecting to AI web search…</p></div>`);
    container.scrollTop = container.scrollHeight;
    const lower = msg.toLowerCase();
    let reply = '';
    if (/\b(password|secret|api.?key|auth.?token|private key)\b/.test(lower)) {
        reply = 'For your security, I cannot reveal passwords, API keys, authentication tokens, or other secret credentials.';
    } else {
        const records = searchEquipLinkApp(msg);
        // The bundled Node server is the default. Never place an OpenAI key in browser code.
        const aiEndpoint = window.EQUIPLINK_AI_ENDPOINT || '/api/assistant';
        let backendError = false;
        try {
            const response = await fetch(aiEndpoint, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({question: msg, appContext: records, role: state.currentRole})
            });
            if (!response.ok) throw new Error(`AI service returned HTTP ${response.status}`);
            const data = await response.json();
            reply = data.answer || data.output_text || '';
        } catch (err) {
            backendError = true;
            console.warn('EquipLink AI backend unavailable:', err.message);
        }
        if (!reply) {
            const localAnswer = records.length
                ? `Local EquipLink data search\n\n${records.map(r => `${r.title}\n${r.text}`).join('\n\n')}`
                : `No matching record was found in the current EquipLink app data for “${msg}”.`;
            reply = backendError
                ? `${localAnswer}\n\nOpenAI + live web search is not connected right now. Start the included Node.js server and configure OPENAI_API_KEY in the server's .env file. Never paste the key into this browser page.`
                : localAnswer;
        }
    }
    const loading = document.getElementById(loadingId);
    if (loading) loading.outerHTML = `<div class="bg-slate-100 text-slate-900 border border-slate-200 p-3 rounded-2xl mr-4 whitespace-pre-wrap"><p class="font-bold"><i class="fa-solid fa-wand-magic-sparkles text-emerald-600"></i> OpenAI Assistant</p><p>${escapeAIHTML(reply)}</p></div>`;
    container.scrollTop = container.scrollHeight;
}

function selectPaymentMethod(method) {
    ['telebirr', 'cbe', 'card'].forEach(m => {
        const el = document.getElementById(`pay-card-${m}`);
        if (el) {
            if (m === method) {
                el.className = "payment-card-option border-2 border-emerald-500 bg-emerald-50 rounded-2xl p-3 text-center cursor-pointer font-bold transition-all shadow-sm";
                el.querySelector('input').checked = true;
            } else {
                el.className = "payment-card-option border-2 border-slate-200 bg-slate-50 rounded-2xl p-3 text-center cursor-pointer hover:bg-slate-100 transition-all font-bold";
                el.querySelector('input').checked = false;
            }
        }
    });
    showToast(`Payment method updated to ${method.toUpperCase()}`, 'info');
}

function toggleFavorite(id, event) {
    event.stopPropagation();
    if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(item => item !== id);
        showToast('Removed from favorites', 'info');
    } else {
        state.favorites.push(id);
        showToast('Saved to favorites! ❤️ ⭐', 'success');
    }
    if (state.currentRole === 'customer') setCustomerTab('home', false);
}

function navigateBack() {
    if (state.navigationStack.length > 1) {
        state.navigationStack.pop();
        const prev = state.navigationStack[state.navigationStack.length - 1];
        if (prev.role === 'customer') setCustomerTab(prev.tab, false);
        if (prev.role === 'owner') setOwnerTab(prev.tab, false);
        showToast('Returned back', 'info');
    } else {
        showToast('Top view reached', 'info');
    }
}

function pushNavState(role, tab) { state.navigationStack.push({ role, tab }); }

function setViewLayout(mode) {
    state.viewLayout = mode;
    document.getElementById('btn-view-grid').className = mode === 'grid' ? "p-1.5 px-2.5 rounded-lg text-xs font-bold bg-yellow-400 text-slate-900" : "p-1.5 px-2.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white";
    document.getElementById('btn-view-list').className = mode === 'list' ? "p-1.5 px-2.5 rounded-lg text-xs font-bold bg-yellow-400 text-slate-900" : "p-1.5 px-2.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white";
    setCustomerTab('home', false);
}

function setOwnerViewLayout(mode) {
    state.ownerViewLayout = mode;
    document.getElementById('btn-owner-grid').className = mode === 'grid' ? "p-1.5 px-2.5 rounded-lg text-xs font-bold bg-yellow-400 text-slate-900" : "p-1.5 px-2.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white";
    document.getElementById('btn-owner-list').className = mode === 'list' ? "p-1.5 px-2.5 rounded-lg text-xs font-bold bg-yellow-400 text-slate-900" : "p-1.5 px-2.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white";
    setOwnerTab('equipment', false);
}

function showAuthScreen(screen) {
    ['register', 'otp', 'login', 'forgot'].forEach(id => {
        const el = document.getElementById(`auth-${id}`);
        if (el) el.classList.toggle('hidden', id !== screen);
    });
}

function quickFillLogin(roleType) {
    const target = state.users.find(u => u.role === roleType);
    if (target) {
        const userIdInput = document.getElementById('login-userid');
        const passwordInput = document.getElementById('login-password');
        if (userIdInput && passwordInput) {
            userIdInput.value = target.userId;
            passwordInput.value = target.password;
            showToast(`Loaded demo credentials for ${roleType.toUpperCase()}`, 'info');
        }
    }
}

function togglePassword(id, btn) {
    const input = document.getElementById(id);
    input.type = input.type === 'password' ? 'text' : 'password';
    btn.innerHTML = input.type === 'password' ? '<i class="fa-solid fa-eye"></i>' : '<i class="fa-solid fa-eye-slash"></i>';
}

function updateAccountTypeUI(role) {
    document.querySelectorAll('.account-type-card').forEach(c => c.classList.remove('border-yellow-400', 'bg-yellow-50'));
    if (role === 'customer') document.getElementById('card-cust').classList.add('border-yellow-400', 'bg-yellow-50');
    if (role === 'owner') document.getElementById('card-owner').classList.add('border-yellow-400', 'bg-yellow-50');
    if (role === 'both') document.getElementById('card-both').classList.add('border-yellow-400', 'bg-yellow-50');
}

function sendFaydaOTP() {
    const fan = document.getElementById('reg-fayda-fan').value.trim();
    if (!fan) {
        showToast('Please enter your Fayda FAN or FIN number first.', 'error');
        return;
    }
    showToast('Fayda OTP verification code sent to your registered phone.', 'info');
}

function submitLogin(e) {
    e.preventDefault();
    const userId = document.getElementById('login-userid').value.trim();
    const pass = document.getElementById('login-password').value;

    const user = state.users.find(u => (u.userId === userId || u.phone === userId) && u.password === pass);

    if (user) {
        state.authUser = user;
        enterApplication();
    } else {
        showToast('Invalid User ID or Password.', 'error');
    }
}

function submitForgotPassword(e) {
    e.preventDefault();
    const target = document.getElementById('forgot-userid').value.trim();
    const found = state.users.find(u => u.userId === target || u.phone === target);
    if (found) {
        showToast(`Reset code sent to phone ${found.phone}`, 'info');
        showAuthScreen('login');
    } else {
        showToast('User account not found.', 'error');
    }
}

function submitRegistration(e) {
    e.preventDefault();
    const role = document.querySelector('input[name="accountRole"]:checked').value;
    const name = document.getElementById('reg-fullname').value.trim();
    const company = document.getElementById('reg-company').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const gender = document.getElementById('reg-gender').value;
    const tin = document.getElementById('reg-tin').value.trim();
    const faydaFan = document.getElementById('reg-fayda-fan').value.trim();
    const address = document.getElementById('reg-address').value.trim();
    const pass = document.getElementById('reg-password').value;

    const prefix = role === 'customer' ? 'CUST-' : role === 'owner' ? 'OWN-' : 'BOTH-';
    const newUserId = prefix + Math.floor(1000 + Math.random() * 9000);

    const newUser = { 
        userId: newUserId, name, company, phone, password: pass, role, status: 'Active', gender, tin, address, faydaFan,
        licenseDoc: 'Trade_License_Doc.pdf'
    };
    state.users.push(newUser);
    state.authUser = newUser;

    document.getElementById('otp-phone-display').textContent = phone;
    showAuthScreen('otp');
}

function verifyOTP(e) {
    e.preventDefault();
    const code = document.getElementById('otp-input').value.trim();
    if (code === '123456') {
        enterApplication();
        showToast(`Fayda OTP verified successfully! User ID: ${state.authUser.userId}`, 'success');
    } else {
        showToast('Invalid OTP code. Use 123456', 'error');
    }
}

function enterApplication() {
    document.getElementById('auth-page').classList.add('hidden');
    document.getElementById('platform-header').classList.remove('hidden');
    document.getElementById('app-main').classList.remove('hidden');

    document.getElementById('header-user-name').textContent = state.authUser.name;
    document.getElementById('header-user-role').textContent = state.authUser.role.toUpperCase();

    const roleSwitcher = document.getElementById('role-switcher-container');
    if (state.authUser.role === 'both') {
        roleSwitcher.classList.remove('hidden');
    } else {
        roleSwitcher.classList.add('hidden');
    }

    if (state.authUser.role === 'admin') {
        switchRole('admin');
    } else if (state.authUser.role === 'owner') {
        switchRole('owner');
    } else {
        switchRole('customer');
    }
}

function logoutEquipLink() {
    state.authUser = null;
    state.navigationStack = [];
    document.getElementById('platform-header').classList.add('hidden');
    document.getElementById('app-main').classList.add('hidden');
    document.getElementById('auth-page').classList.remove('hidden');
    showAuthScreen('login');
}

function switchRole(role) {
    if (role === 'admin' && state.authUser?.role !== 'admin') {
        showToast('Access Denied: Admin Dashboard.', 'error');
        return;
    }

    state.currentRole = role;

    ['customer', 'owner'].forEach(r => {
        const btn = document.getElementById(`role-btn-${r}`);
        if (btn) {
            btn.className = r === role 
                ? "px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 bg-yellow-400 text-slate-900 shadow-sm"
                : "px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 transition-all flex items-center space-x-1.5";
        }
    });

    document.getElementById('view-customer').classList.toggle('hidden', role !== 'customer');
    document.getElementById('view-owner').classList.toggle('hidden', role !== 'owner');
    document.getElementById('view-admin').classList.toggle('hidden', role !== 'admin');

    if (role === 'customer') setCustomerTab('home');
    if (role === 'owner') setOwnerTab('dashboard');
    if (role === 'admin') renderAdminView();
}

function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

function setCustomerTab(tab, recordHistory = true) {
    state.activeTab = tab;
    if (recordHistory) pushNavState('customer', tab);

    ['home', 'search', 'bookings', 'notifications'].forEach(t => {
        const btn = document.getElementById(`nav-c-${t}`);
        if (btn) btn.className = t === tab ? "flex flex-col items-center py-1 text-amber-600 font-bold" : "flex flex-col items-center py-1 text-slate-500 hover:text-slate-900";
    });

    const c = document.getElementById('customer-content');
    if (tab === 'home' || tab === 'search') c.innerHTML = renderCustomerHome();
    if (tab === 'bookings') c.innerHTML = renderCustomerBookings();
    if (tab === 'notifications') c.innerHTML = renderCustomerNotifications();
}

function renderCustomerHome() {
    const availableTypes = state.selectedCategory === 'All' 
        ? Object.values(state.machineTypesMap).flat()
        : (state.machineTypesMap[state.selectedCategory] || []);

    const list = state.equipments.filter(e => {
        const matchCat = (state.selectedCategory === 'All' || e.category === state.selectedCategory);
        const matchType = (state.selectedType === 'All' || e.machineType === state.selectedType);
        const matchQuery = e.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || e.location.toLowerCase().includes(state.searchQuery.toLowerCase());
        return matchCat && matchType && matchQuery;
    });

    return `
        <div class="bg-white text-slate-900 p-4 rounded-2xl space-y-3 border border-slate-200 shadow-sm">
            <div class="relative">
                <input type="text" id="live-search-input" value="${state.searchQuery}" oninput="handleLiveSearch(this.value)" placeholder="Search equipment or location instantly..." class="w-full bg-slate-50 text-slate-900 p-3 pl-10 rounded-xl text-xs border border-slate-200 focus:border-yellow-400 outline-none">
                <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3.5 text-slate-400 text-xs"></i>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Category</label>
                    <select onchange="filterCategory(this.value)" class="w-full bg-slate-50 text-slate-900 font-bold p-2.5 rounded-xl text-xs border border-slate-200 outline-none">
                        ${state.categoriesList.map(cat => `<option value="${cat}" ${state.selectedCategory === cat ? 'selected' : ''}>${cat}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Machine Type</label>
                    <select onchange="filterMachineType(this.value)" class="w-full bg-slate-50 text-slate-900 font-bold p-2.5 rounded-xl text-xs border border-slate-200 outline-none">
                        <option value="All">All Types</option>
                        ${availableTypes.map(t => `<option value="${t}" ${state.selectedType === t ? 'selected' : ''}>${t}</option>`).join('')}
                    </select>
                </div>
            </div>
        </div>

        <div id="equipment-results-container" class="${state.viewLayout === 'grid' ? 'grid grid-cols-2 gap-3.5' : 'space-y-3'}">
            ${list.length > 0 ? list.map(e => {
                let statusBadge = '<span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Available</span>';
                if (e.status === 'Rented') statusBadge = '<span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">Rented</span>';
                else if (e.status === 'On Progress') statusBadge = '<span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">On Progress</span>';
                else if (e.status === 'Not Active') statusBadge = '<span class="bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-bold">Not Active</span>';

                let bookingStatus = e.booked ? '<span class="text-amber-700 font-bold">🔒 Booked</span>' : '<span class="text-emerald-700 font-bold">🟢 Not Booked</span>';

                return `
                <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-slate-300 transition-all ${state.viewLayout === 'list' ? 'flex items-center' : 'flex flex-col'}">
                    <div class="relative ${state.viewLayout === 'list' ? 'w-32 h-24 flex-shrink-0' : 'w-full h-36'}">
                        <img src="${e.photos.front}" class="w-full h-full object-cover">
                        <button onclick="toggleFavorite('${e.id}', event)" class="absolute top-2.5 right-2.5 bg-white/90 p-2 rounded-full text-xs shadow-md" title="Favorite">
                            <i class="fa-solid fa-heart ${state.favorites.includes(e.id) ? 'text-red-500' : 'text-slate-400'}"></i>
                        </button>
                    </div>
                    <div class="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                        <div>
                            <div class="flex items-center space-x-1.5 mb-1">
                                <span class="text-[9px] font-extrabold bg-yellow-100 text-slate-900 px-2 py-0.5 rounded-md uppercase">${e.machineType}</span>
                                <span class="text-[9px]">${statusBadge}</span>
                            </div>
                            <h4 class="font-bold text-xs text-slate-900 line-clamp-1">${e.title}</h4>
                            <p class="text-[10px] text-slate-500 mt-0.5">📍 ${e.location} • SN: ${e.serialNumber}</p>
                            <p class="text-[10px] mt-0.5">${bookingStatus}</p>
                        </div>
                        <div class="pt-2 flex items-center justify-between border-t border-slate-100">
                            <span class="text-xs font-black text-slate-900">${formatETB(e.dailyRate)}/day</span>
                            <button onclick="viewEquipmentDetails('${e.id}')" class="bg-slate-900 text-yellow-400 font-extrabold px-3 py-2 rounded-xl text-xs hover:bg-black transition-all shadow-sm flex items-center space-x-1">
                                <span>Detail</span>
                                <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;}).join('') : '<p class="text-center text-slate-400 py-8">No equipment found matching your search.</p>'}
        </div>
    `;
}

function handleLiveSearch(query) {
    state.searchQuery = query.trim();
    const container = document.getElementById('equipment-results-container');
    if (!container) return;

    const list = state.equipments.filter(e => {
        const matchCat = (state.selectedCategory === 'All' || e.category === state.selectedCategory);
        const matchType = (state.selectedType === 'All' || e.machineType === state.selectedType);
        const matchQuery = e.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || e.location.toLowerCase().includes(state.searchQuery.toLowerCase()) || e.machineType.toLowerCase().includes(state.searchQuery.toLowerCase());
        return matchCat && matchType && matchQuery;
    });

    container.innerHTML = list.length > 0 ? list.map(e => {
        let statusBadge = '<span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Available</span>';
        if (e.status === 'Rented') statusBadge = '<span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">Rented</span>';
        else if (e.status === 'On Progress') statusBadge = '<span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">On Progress</span>';
        else if (e.status === 'Not Active') statusBadge = '<span class="bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-bold">Not Active</span>';

        let bookingStatus = e.booked ? '<span class="text-amber-700 font-bold">🔒 Booked</span>' : '<span class="text-emerald-700 font-bold">🟢 Not Booked</span>';

        return `
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-slate-300 transition-all ${state.viewLayout === 'list' ? 'flex items-center' : 'flex flex-col'}">
            <div class="relative ${state.viewLayout === 'list' ? 'w-32 h-24 flex-shrink-0' : 'w-full h-36'}">
                <img src="${e.photos.front}" class="w-full h-full object-cover">
                <button onclick="toggleFavorite('${e.id}', event)" class="absolute top-2.5 right-2.5 bg-white/90 p-2 rounded-full text-xs shadow-md" title="Favorite">
                    <i class="fa-solid fa-heart ${state.favorites.includes(e.id) ? 'text-red-500' : 'text-slate-400'}"></i>
                </button>
            </div>
            <div class="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex items-center space-x-1.5 mb-1">
                        <span class="text-[9px] font-extrabold bg-yellow-100 text-slate-900 px-2 py-0.5 rounded-md uppercase">${e.machineType}</span>
                        <span class="text-[9px]">${statusBadge}</span>
                    </div>
                    <h4 class="font-bold text-xs text-slate-900 line-clamp-1">${e.title}</h4>
                    <p class="text-[10px] text-slate-500 mt-0.5">📍 ${e.location} • SN: ${e.serialNumber}</p>
                    <p class="text-[10px] mt-0.5">${bookingStatus}</p>
                </div>
                <div class="pt-2 flex items-center justify-between border-t border-slate-100">
                    <span class="text-xs font-black text-slate-900">${formatETB(e.dailyRate)}/day</span>
                    <button onclick="viewEquipmentDetails('${e.id}')" class="bg-slate-900 text-yellow-400 font-extrabold px-3 py-2 rounded-xl text-xs hover:bg-black transition-all shadow-sm flex items-center space-x-1">
                        <span>Detail</span>
                        <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </button>
                </div>
            </div>
        </div>
    `;}).join('') : '<p class="text-center text-slate-400 py-8">No equipment found matching your search.</p>';
}

function filterCategory(cat) { 
    state.selectedCategory = cat; 
    state.selectedType = 'All';
    setCustomerTab('home', false); 
}

function filterMachineType(type) {
    state.selectedType = type;
    setCustomerTab('home', false);
}

function viewEquipmentDetails(id) {
    const e = state.equipments.find(item => item.id === id);
    if (!e) return;

    state.selectedEquipmentId = id;
    const c = document.getElementById('modal-equipment-content');
    c.innerHTML = `
        <div class="space-y-1.5">
            <span class="text-[10px] font-extrabold bg-yellow-100 text-slate-900 px-2.5 py-0.5 rounded-md uppercase">${e.category} / ${e.machineType}</span>
            <h3 class="font-black text-base text-slate-900">${e.title}</h3>
            <p class="text-xs text-slate-500">Owner: <strong>${e.owner}</strong> | Status: <strong class="text-emerald-700">${e.status}</strong></p>
        </div>

        <div class="space-y-1">
            <p class="text-[10px] font-bold uppercase text-slate-500">Machine Photos (6 Angles)</p>
            <div class="grid grid-cols-3 gap-2">
                <div class="text-center"><img src="${e.photos.front}" class="h-16 w-full object-cover rounded-xl"><span class="text-[9px] font-bold text-slate-700">Front</span></div>
                <div class="text-center"><img src="${e.photos.back}" class="h-16 w-full object-cover rounded-xl"><span class="text-[9px] font-bold text-slate-700">Back</span></div>
                <div class="text-center"><img src="${e.photos.flh}" class="h-16 w-full object-cover rounded-xl"><span class="text-[9px] font-bold text-slate-700">Front & LH</span></div>
                <div class="text-center"><img src="${e.photos.frh}" class="h-16 w-full object-cover rounded-xl"><span class="text-[9px] font-bold text-slate-700">Front & RH</span></div>
                <div class="text-center"><img src="${e.photos.blh}" class="h-16 w-full object-cover rounded-xl"><span class="text-[9px] font-bold text-slate-700">Back & LH</span></div>
                <div class="text-center"><img src="${e.photos.brh}" class="h-16 w-full object-cover rounded-xl"><span class="text-[9px] font-bold text-slate-700">Back & RH</span></div>
            </div>
        </div>

        <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs space-y-1.5 text-slate-700">
            <p><strong>Model:</strong> ${e.model}</p>
            <p><strong>Serial Number:</strong> ${e.serialNumber}</p>
            <p><strong>Production Date:</strong> ${localizeDate(e.productDate)}</p>
            <p><strong>Operational Hours:</strong> ${e.operationalHours} Hours</p>
            <p><strong>Location:</strong> 📍 ${e.location}</p>
            <p><strong>IoT Telematics:</strong> 🛰️ GPS: ${e.telematics.gps} | Fuel: ${e.telematics.fuelBurnRate}</p>
        </div>

        <button onclick="openRentalCalculator('${e.id}')" class="w-full bg-slate-900 text-yellow-400 font-extrabold py-3.5 rounded-2xl text-xs hover:bg-black transition-all shadow-md">
            BOOK NOW
        </button>
    `;
    openModal('modal-equipment-details');
}

function openRentalCalculator(id) {
    closeModal('modal-equipment-details');
    document.getElementById('calc-equipment-id').value = id;
    calculateRentalCost();
    openModal('modal-rental-calculator');
}

function calculateRentalCost() {
    const id = document.getElementById('calc-equipment-id').value;
    const e = state.equipments.find(item => item.id === id);
    if (!e) return;

    const start = new Date(document.getElementById('calc-start').value || '2026-10-15');
    const end = new Date(document.getElementById('calc-end').value || '2026-10-22');
    const days = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));
    const hoursPerDay = parseInt(document.getElementById('calc-hours').value) || 10;
    const hasOp = document.getElementById('calc-operator').value === 'yes';

    const base = days * e.dailyRate;
    const op = hasOp ? days * 3500 : 0;
    const trans = 35000;
    const fee = Math.round((base + op + trans) * 0.07);
    const total = base + op + trans + fee;

    document.getElementById('cost-base').textContent = formatETB(base);
    document.getElementById('cost-operator').textContent = formatETB(op);
    document.getElementById('cost-transport').textContent = formatETB(trans);
    document.getElementById('cost-platform').textContent = formatETB(fee);
    document.getElementById('cost-total').textContent = formatETB(total);
}

function submitRentalCalculation(evt) {
    evt.preventDefault();
    closeModal('modal-rental-calculator');
    openModal('modal-agreement-page');
}

function submitFinalBooking(evt) {
    evt.preventDefault();
    const id = document.getElementById('calc-equipment-id').value;
    const e = state.equipments.find(item => item.id === id);
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'telebirr';
    const agreementType = document.getElementById('agreement-type').value;

    e.booked = true;
    e.status = 'Rented';

    const booking = {
        id: 'EL-' + Math.floor(10000 + Math.random() * 90000),
        equipmentId: e.id,
        equipmentName: e.title,
        customerName: state.authUser.name,
        ownerName: e.owner,
        location: document.getElementById('calc-location').value,
        startDate: document.getElementById('calc-start').value,
        endDate: document.getElementById('calc-end').value,
        hoursPerDay: parseInt(document.getElementById('calc-hours').value),
        status: 'Active',
        paymentMethod: paymentMethod.toUpperCase(),
        agreementType: agreementType,
        totalCost: 450000,
        platformFee: 31500
    };

    state.bookings.unshift(booking);
    closeModal('modal-agreement-page');
    showToast(`Agreement executed & Payment via ${paymentMethod.toUpperCase()} confirmed!`, 'success');
    setCustomerTab('bookings');
}

function renderCustomerBookings() {
    return `
        <div class="space-y-3 text-xs">
            <h3 class="font-black text-slate-900">Order Activity & Bookings</h3>
            ${state.bookings.map(b => `
                <div class="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div class="flex justify-between font-bold">
                        <span class="text-slate-900">${b.equipmentName}</span>
                        <span class="text-emerald-600">${b.status} (${b.paymentMethod || 'Telebirr'})</span>
                    </div>
                    <p class="text-slate-500">Site: ${b.location} • Agreement: ${b.agreementType || 'Standard Lease'}</p>
                    <p class="text-slate-500">Dates: ${localizeDate(b.startDate)} to${localizeDate(b.endDate)}</p>
                    <p class="font-black text-slate-900">${formatETB(b.totalCost)}</p>
                    <button onclick="openReportBreakdown('${b.id}')" class="w-full bg-red-50 text-red-600 py-2 rounded-xl border border-red-200 font-bold hover:bg-red-600 hover:text-white transition-all">Report Breakdown</button>
                </div>
            `).join('')}
        </div>
    `;
}

function renderCustomerNotifications() {
    return `
        <div class="space-y-2.5 text-xs">
            <h3 class="font-black text-slate-900">Notifications & Updates</h3>
            <div class="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                <p class="font-bold text-slate-900">🟢 Booking & Agreement Proclamation Update</p>
                <p class="text-slate-500 text-[10px] mt-0.5">Your agreement and escrow payment via Telebirr/CBE have been successfully signed and verified.</p>
            </div>
            <div class="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                <p class="font-bold text-slate-900">ℹ️ Fayda Registry Verification</p>
                <p class="text-slate-500 text-[10px] mt-0.5">Your FAN number and registration documents were successfully verified.</p>
            </div>
        </div>
    `;
}

function openReportBreakdown(bookingId) {
    document.getElementById('report-booking-id').value = bookingId;
    openModal('modal-report-breakdown');
}

function submitBreakdownReport(evt) {
    evt.preventDefault();
    const bId = document.getElementById('report-booking-id').value;
    const b = state.bookings.find(item => item.id === bId);

    state.disputes.unshift({
        id: 'DSP-' + Math.floor(100 + Math.random() * 900),
        bookingId: bId,
        reporter: state.authUser.name,
        owner: b ? b.ownerName : 'Owner',
        issueType: document.getElementById('report-type').value,
        description: document.getElementById('report-description').value,
        status: 'Under Review'
    });

    closeModal('modal-report-breakdown');
    showToast('Breakdown reported to Admin! Dispute created.', 'error');
}

function setOwnerTab(tab, recordHistory = true) {
    state.activeTab = tab;
    if (recordHistory) pushNavState('owner', tab);

    ['dashboard', 'equipment', 'requests', 'notifications'].forEach(t => {
        const btn = document.getElementById(`nav-o-${t}`);
        if (btn) btn.className = t === tab ? "flex flex-col items-center py-1 text-amber-600 font-bold" : "flex flex-col items-center py-1 text-slate-500 hover:text-slate-900";
    });

    const c = document.getElementById('owner-content');
    if (tab === 'dashboard' || tab === 'equipment') c.innerHTML = renderOwnerFleet();
    if (tab === 'requests') c.innerHTML = renderOwnerRequests();
    if (tab === 'notifications') c.innerHTML = renderCustomerNotifications();
}

function renderOwnerFleet() {
    const myFleet = state.equipments.filter(e => e.ownerId === state.authUser.userId || state.authUser.role === 'both');
    return `
        <div class="space-y-3 text-xs">
            <h3 class="font-black text-slate-900 text-sm">My Registered Fleet (${myFleet.length})</h3>
            <p class="text-[10px] text-slate-500">Click machine card to inspect timeline and transaction history.</p>
            <div class="${state.ownerViewLayout === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 gap-2.5' : 'space-y-2.5'}">
                ${myFleet.map(e => `
                    <div onclick="openMachineHistoryModal('${e.id}')" class="bg-white p-3.5 rounded-2xl border border-slate-200 flex justify-between items-center cursor-pointer hover:border-yellow-400 transition-all shadow-sm">
                        <div>
                            <span class="text-[9px] font-bold text-slate-900 bg-yellow-100 px-2 py-0.5 rounded">${e.machineType}</span>
                            <h4 class="font-bold text-slate-900 mt-1">${e.title}</h4>
                            <p class="text-slate-500 text-[10px]">${e.location} • SN: ${e.serialNumber}</p>
                        </div>
                        <span class="px-2.5 py-1 rounded-xl text-[10px] font-bold ${e.verified ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-yellow-100 text-amber-800 border border-yellow-200'}">
                            ${e.verified ? '🟢 Verified' : '⏳ Pending'}
                        </span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function openMachineHistoryModal(eqId) {
    const e = state.equipments.find(item => item.id === eqId);
    if (!e) return;

    const modal = document.getElementById('modal-history-content');
    modal.innerHTML = `
        <div class="border-b border-slate-200 pb-3">
            <h3 class="font-black text-sm text-slate-900">${e.title} History</h3>
            <p class="text-[10px] text-slate-500">Owner: ${e.owner} | SN: ${e.serialNumber}</p>
        </div>

        <div class="space-y-2">
            <h4 class="font-bold text-slate-900 text-xs uppercase tracking-wider">Ledger & Transaction History</h4>
            ${e.history && e.history.length > 0 ? e.history.map(h => `
                <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                    <div>
                        <span class="font-bold text-slate-900 block">${h.event}</span>
                        <span class="text-[10px] text-slate-500">${localizeDate(h.date)} •${h.client}</span>
                    </div>
                    <span class="font-mono font-black ${h.amount >= 0 ? 'text-emerald-600' : 'text-red-600'}">
                        ${h.amount >= 0 ? '+' : ''}${formatETB(h.amount)}
                    </span>
                </div>
            `).join('') : '<p class="text-slate-500">No records logged.</p>'}
        </div>
    `;

    openModal('modal-machine-history');
}

function submitNewEquipment(evt) {
    evt.preventDefault();
    const newEq = {
        id: 'EQ-' + Math.floor(200 + Math.random() * 800),
        title: document.getElementById('add-title').value,
        operatorOption: document.getElementById('add-operator-option')?.value || 'without-operator',
        category: document.getElementById('add-category').value,
        machineType: document.getElementById('add-machinetype').value,
        model: document.getElementById('add-machinetype').value + '-Series',
        serialNumber: document.getElementById('add-serial').value,
        productDate: document.getElementById('add-proddate').value,
        operationalHours: parseInt(document.getElementById('add-hours').value),
        dailyRate: parseInt(document.getElementById('add-daily').value),
        hourlyRate: parseInt(document.getElementById('add-hourly').value),
        location: document.getElementById('add-location').value,
        owner: state.authUser.company,
        ownerId: state.authUser.userId,
        verified: false,
        status: 'Available',
        booked: false,
        telematics: { gps: '9.0100° N, 38.7600° E', fuelBurnRate: '15.0 L/h', engineHealth: 'New Entry' },
        photos: {
            front: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=800&q=80',
            back: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
            flh: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
            frh: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
            blh: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=800&q=80',
            brh: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'
        },
        history: [{ date: '2026-10-09', event: 'Initial Equipment Submission', client: 'EquipLink Verification', amount: 0 }]
    };

    state.equipments.unshift(newEq);
    closeModal('modal-add-equipment');
    showToast('Machine submitted with 6 photo angles and ownership documents!', 'success');
    setOwnerTab('equipment');
}

function renderOwnerRequests() { return `<div class="p-4 text-xs text-slate-500">No pending owner requests.</div>`; }

function renderAdminView() {
    document.getElementById('stat-users').textContent = state.users.length;
    document.getElementById('stat-equipment').textContent = state.equipments.length;
    document.getElementById('stat-rentals').textContent = state.bookings.filter(b => b.status === 'Active').length;
    document.getElementById('stat-verifications').textContent = state.equipments.filter(e => !e.verified).length;
    document.getElementById('stat-disputes').textContent = state.disputes.filter(d => d.status === 'Under Review').length;

    renderAdminAnalyticsChart();
    renderAdminVerifications();
    renderAdminDisputes();
}

function openAdminMetricTable(type) {
    const container = document.getElementById('admin-dynamic-table-container');
    const title = document.getElementById('admin-table-title');
    const content = document.getElementById('admin-table-content');
    container.classList.remove('hidden');

    if (type === 'users') {
        title.textContent = 'Total Users List & Verification Docs';
        content.innerHTML = `
            <table class="w-full text-left text-xs">
                <thead><tr class="bg-slate-50 text-slate-500"><th class="p-2.5">User ID</th><th class="p-2.5">Name</th><th class="p-2.5">Fayda FAN</th><th class="p-2.5">TIN</th><th class="p-2.5">Role</th><th class="p-2.5 text-right">Review</th></tr></thead>
                <tbody>${state.users.map(u => `
                    <tr class="border-b border-slate-100">
                        <td class="p-2.5 font-mono font-bold text-slate-900">${u.userId}</td>
                        <td class="p-2.5 font-bold text-slate-900">${u.name}</td>
                        <td class="p-2.5 font-mono text-amber-700">${u.faydaFan || 'FAN-99381029'}</td>
                        <td class="p-2.5 text-slate-600">${u.tin}</td>
                        <td class="p-2.5 text-amber-700 font-bold">${u.role}</td>
                        <td class="p-2.5 text-right"><button onclick="inspectOwnerAttachments('${u.userId}')" class="bg-slate-100 text-slate-900 px-2.5 py-1 rounded-xl font-bold text-[10px]">Open & Verify</button></td>
                    </tr>
                `).join('')}</tbody>
            </table>
        `;
    } else if (type === 'machines') {
        title.textContent = 'Machines Inventory List';
        content.innerHTML = `
            <table class="w-full text-left text-xs">
                <thead><tr class="bg-slate-50 text-slate-500"><th class="p-2.5">ID</th><th class="p-2.5">Title</th><th class="p-2.5">Type</th><th class="p-2.5">Owner</th><th class="p-2.5">Daily Rate</th></tr></thead>
                <tbody>${state.equipments.map(e => `<tr class="border-b border-slate-100"><td class="p-2.5 font-mono text-slate-900">${e.id}</td><td class="p-2.5 font-bold text-slate-900">${e.title}</td><td class="p-2.5 text-amber-700">${e.machineType}</td><td class="p-2.5 text-slate-600">${e.owner}</td><td class="p-2.5 text-slate-900 font-bold">${formatETB(e.dailyRate)}</td></tr>`).join('')}</tbody>
            </table>
        `;
    } else if (type === 'rentals' || type === 'revenue') {
        title.textContent = 'Active Rentals & Platform Review Ledger';
        content.innerHTML = `
            <table class="w-full text-left text-xs">
                <thead><tr class="bg-slate-50 text-slate-500"><th class="p-2.5">Booking ID</th><th class="p-2.5">Customer</th><th class="p-2.5">Payment</th><th class="p-2.5">Total Value</th><th class="p-2.5">7% Platform Review</th></tr></thead>
                <tbody>${state.bookings.map(b => `<tr class="border-b border-slate-100"><td class="p-2.5 font-mono text-slate-900">${b.id}</td><td class="p-2.5 text-slate-900">${b.customerName}</td><td class="p-2.5 text-emerald-600 font-bold">${b.paymentMethod || 'Telebirr'}</td><td class="p-2.5 font-bold text-slate-900">${formatETB(b.totalCost)}</td><td class="p-2.5 text-emerald-600 font-bold">${formatETB(b.platformFee)}</td></tr>`).join('')}</tbody>
            </table>
        `;
    } else if (type === 'verifications') {
        title.textContent = 'Pending Review Queue';
        renderAdminVerifications();
        return;
    } else if (type === 'disputes') {
        title.textContent = 'Open Dispute Queue';
        renderAdminDisputes();
        return;
    }
}

function inspectOwnerAttachments(userId) {
    const u = state.users.find(item => item.userId === userId);
    if (!u) return;

    const content = document.getElementById('admin-verify-content');
    content.innerHTML = `
        <div class="space-y-3">
            <p><strong>Name:</strong> ${u.name}</p>
            <p><strong>Phone:</strong> ${u.phone}</p>
            <p><strong>Fayda FAN:</strong> <span class="text-amber-700 font-mono">${u.faydaFan || 'FAN-99381029'}</span></p>
            <p><strong>TIN Number:</strong> ${u.tin}</p>
            
            <div class="space-y-1.5 pt-2 border-t border-slate-200">
                <label class="font-bold text-amber-800 block text-xs">Admin Verification Message / Rejection Reason</label>
                <textarea id="admin-msg-box" rows="3" placeholder="Enter message for user..." class="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl p-2.5 text-xs">Your verification documents have been inspected successfully. Welcome to EquipLink Ethiopia.</textarea>
            </div>

            <div class="grid grid-cols-2 gap-2 pt-1">
                <button onclick="adminRejectVerification('${u.userId}')" class="w-full bg-red-50 text-red-600 border border-red-200 py-2.5 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all">
                    REJECT & SEND MSG
                </button>
                <button onclick="adminApproveVerification('${u.userId}')" class="w-full bg-emerald-600 text-white py-2.5 rounded-xl font-bold hover:bg-emerald-500 transition-all">
                    APPROVE & NOTIFY
                </button>
            </div>
        </div>
    `;

    openModal('modal-admin-verify');
}

function adminApproveVerification(userId) {
    showToast(`Approved successfully! Message sent to user.`, 'success');
    closeModal('modal-admin-verify');
    renderAdminView();
}

function adminRejectVerification(userId) {
    showToast(`Verification rejected. Reason sent to user.`, 'error');
    closeModal('modal-admin-verify');
    renderAdminView();
}

function closeAdminMetricTable() {
    document.getElementById('admin-dynamic-table-container').classList.add('hidden');
}

function renderAdminAnalyticsChart() {
    const el = document.getElementById('admin-analytics-chart');
    if (!el) return;
    const months = [];
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
        const revenue = (state.bookings || []).filter(b => String(b.startDate || '').slice(0,7) === key)
            .reduce((sum,b) => sum + (Number(b.platformFee) || Math.round((Number(b.totalCost)||0)*0.07)), 0);
        months.push({label:d.toLocaleDateString('en-US',{month:'short',year:'numeric'}), revenue});
    }
    const max = Math.max(1, ...months.map(m=>m.revenue));
    el.innerHTML = `<div class="h-full w-full bg-slate-50 text-slate-900 rounded-2xl p-4 flex flex-col justify-between border border-slate-200">
        <div class="flex flex-wrap justify-between gap-2 text-slate-600 text-[10px]"><span>Platform Growth & Revenue Analytics</span><span>Month / Year · Platform fee (ETB)</span></div>
        <div class="h-28 flex items-end gap-2 px-1 pt-3">${months.map(m=>`<div class="flex-1 h-full flex flex-col justify-end items-center gap-1 min-w-0"><span class="text-[9px] font-bold">${m.revenue ? Math.round(m.revenue/1000)+'K' : '0'}</span><div title="${m.label}: ${m.revenue.toLocaleString()} ETB" class="w-full max-w-12 bg-red-600 rounded-t-md" style="height:${Math.max(4,m.revenue/max*78)}%"></div><span class="text-[9px] text-center leading-tight">${m.label}</span></div>`).join('')}</div>
        <p class="text-[10px] text-slate-500">Monthly values are calculated from the booking dates in the current app data. Months without recorded bookings display zero.</p>
    </div>`;
}

function renderAdminVerifications() {
    const tbody = document.getElementById('admin-verification-tbody');
    tbody.innerHTML = state.equipments.map(e => `
        <tr class="border-b border-slate-100">
            <td class="p-3 font-bold text-slate-900">${e.title}<br><span class="text-[10px] text-slate-500">${e.owner}</span></td>
            <td class="p-3 text-slate-600">${e.location}</td>
            <td class="p-3"><button onclick="inspectOwnerAttachments('${e.ownerId}')" class="text-amber-700 font-bold underline">Check FAN & License</button></td>
            <td class="p-3">
                <span class="px-2.5 py-1 rounded-xl text-[10px] font-bold ${e.verified ? 'bg-emerald-100 text-emerald-800' : 'bg-yellow-100 text-amber-800'}">
                    ${e.verified ? 'Verified' : 'Pending'}
                </span>
            </td>
            <td class="p-3 text-right space-x-1.5">
                <button onclick="openMachineHistoryModal('${e.id}')" class="bg-slate-100 text-slate-900 px-2.5 py-1.5 rounded-xl text-[10px] font-bold">History</button>
                ${!e.verified ? `<button onclick="inspectOwnerAttachments('${e.ownerId}')" class="bg-emerald-600 text-white px-2.5 py-1.5 rounded-xl text-[10px] font-bold">Inspect</button>` : ''}
            </td>
        </tr>
    `).join('');
}

function renderAdminDisputes() {
    const list = document.getElementById('admin-disputes-list');
    list.innerHTML = state.disputes.map(d => `
        <div class="bg-red-50 border border-red-200 p-3.5 rounded-2xl space-y-2 text-xs">
            <div class="flex justify-between font-bold text-red-800">
                <span>${d.issueType}</span>
                <span class="bg-red-600 text-white text-[9px] px-2 py-0.5 rounded-full">${d.status}</span>
            </div>
            <p class="text-slate-700">${d.description}</p>
            <button onclick="resolveDispute('${d.id}')" class="w-full bg-red-600 text-white py-1.5 rounded-xl font-bold hover:bg-red-700 transition-all">Resolve Ticket</button>
        </div>
    `).join('');
}

function resolveDispute(id) {
    const d = state.disputes.find(item => item.id === id);
    if (d) {
        d.status = 'Resolved';
        showToast(`Dispute ${id} resolved by Admin`, 'success');
        renderAdminView();
    }
}

window.onload = function() {
    showAuthScreen('login');
};

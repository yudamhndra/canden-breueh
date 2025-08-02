const splitParagraphs = (text) => {
    // Remove leading/trailing whitespace and normalize line endings
    const cleanText = text.trim().replace(/\r\n/g, '\n');
    
    // Split on double newlines and clean up paragraphs
    return cleanText
        .split(/\n\s*\n/)
        .map(para => para.replace(/\s+/g, ' ').trim())
        .filter(para => para.length > 0);
};

const splitText = (text, maxLength = 170) => {
    // Normalize whitespace
    text = text.trim().replace(/\s+/g, ' ');
    
    const sections = [];
    let currentIndex = 0;

    while (currentIndex < text.length) {
        let nextIndex = currentIndex + maxLength;
        
        if (nextIndex < text.length) {
            const lastSpace = text.lastIndexOf(' ', nextIndex);
            if (lastSpace > currentIndex) {
                nextIndex = lastSpace;
            }
        }

        const section = text.slice(currentIndex, nextIndex).trim();
        sections.push(section + (nextIndex < text.length ? ' ' : ''));
        
        currentIndex = nextIndex + 1;
    }

    return sections;
};

const BAB_II_TINJAUAN_PUSTAKA = {
    intro: splitParagraphs(`
        Located at the western tip of Aceh, is renowned for its rich natural potential and strong community spirit rooted in gotong royong (mutual cooperation) and familial bonds. The island's pristine waters provide abundant marine resources, with most residents working as fishermen harvesting fish, lobster, shrimp, and octopus, while agriculture complements fishing through cultivation of nutmeg, chili, and cloves on fertile lands. Despite limited transportation access and educational facilities, the community continuously innovates and collaborates to improve quality of life, relying on basic healthcare through community health centers and health posts, while mosques serve as vital centers for social and religious activities. The island's untouched beaches and captivating underwater attractions are driving emerging tourism growth, complemented by a flourishing creative economy through processed seafood products and traditional handicrafts. With unwavering community spirit and optimism, residents adapt to challenges while embracing opportunities for broader development, with future hopes resting on empowering the younger generation and various development programs, including university student community service initiatives, aiming to transform Breueh into a prosperous, progressive island while preserving its cultural heritage and natural identity.
    `).map(paragraph => splitText(paragraph)),

    section1: {
        title: "Effective Lesson - Direct Instruction",
        description: splitParagraphs(`
            Direct Instruction digunakan dalam menggambarkan pelajaran saat tenaga 
            pendidik mengirimkan informasi langsung kepada siswa, menyusun kelas 
            untuk mencapai serangkaian tujuan yang jelas seefisien mungkin. Metode ini 
            sangat baik digunakan untuk mengajarkan atau memberikan informasi yang 
            terdefinisi dengan baik yang harus dikuasai oleh siswa (Slavin, 2012).  

            Salah satu metode dari effective lesson adalah pendekatan direct instruction. 
            Direct instruction dibangun dari asumsi bahwa setiap pelajar dapat belajar 
            dengan instruksi yang telah dirancang dengan sedemikian rupa. Istilah direct 
            instruction banyak digunakan ketika merujuk pada program pendidikan yang 
            melibatkan instruksi yang eksplisit dan sistematik. Ketika individu tidak dapat 
            melaksanakan proses pembelajar, bukan berarti terdapat permasalahan pada 
            individu tersebut, melainkan terdapat permasalahan pada instruksi yang 
            diberikan. Hal ini berarti bahwa pendekatan ini menentang develomental 
            approaches, constructivism, dan theories of learning yang mengasumsikan 
            bahwa proses belajar dipengaruhi oleh tahap perkembangan individu, 
            kemampuannya dalam mengkonstruksi dan memahami, serta cara unik dalam 
            belajar yang dimiliki oleh individu (Stockard et al., 2018) 

            Pendekatan direct instruction mengasumsikan bahwa individu dapat 
            mempelajari hal baru ketika pelajar menguasai pengatahuan dan keterampilan 
            yang telah menjadi prasyarat proses pembelajaran, serta instruksi yang tidak 
            ambigu. Dengan kata lain, pendekatan ini mengasumsikan bahwa pelajar pada 
            hakikatnya merupakan makhluk yang logis. Penuntasan akan suatu fondasi 
            pengetahuan menjadi kunci utama pada direct instruction. Pembelajaran hal
            hal baru akan menjadi lebih mudah ketika terdapat pondasi pengetahuan yang 
            dimiliki. Lebih lanjut, mempelajari konsep baru lebih mudah dibanding 
            unlearn terhadap konseptualisasi atau fondasi pengatahuan yang salah 
            (Stockard et al., 2018).
            
            Penelitian yang dilakukan pada tahun 1970-an menemukan bahwa terdapat 
            beberapa unsur dari pelajaran direct instruction. Secara umum, peneliti setuju 
            bahwa urutan dari proses pembelajaran menjadi ciri pelajaran direct instruction 
            yang efektif. Unsur-unsur dari direct instruction adalah sebagai berikut.
        `).map(paragraph => splitText(paragraph)),

        details: [
            {
                title: "State Learning Objective",
                description: splitParagraphs(`
                    Langkah pertama dalam melakukan effective lesson adalah menentukan 
                    tujuan di awal pembelajaran. Hal ini dilakukan dengan merencanakan 
                    tujuan pembelajaran sehingga tujuan tersebut jelas. Langkah ini merupakan 
                    langkah penting karena di dalamnya akan disusun mengenai kerangka kerja 
                    berupa materi pembelajaran, bahan instruksional, dan kegiatan 
                    pembelajaran yang sesuai (Slavin, 2012). Setiap perencanaan pembelajaran 
                    harus memiliki tujuan yang jelas, sehingga tenaga pendidikan dan siswa 
                    dapat menentukan dan mengetahui apa yang akan dicapai di dalam suatu 
                    pembelajaran tersebut. Tujuannya harus spesifik, terukur, dapat dicapai, 
                    relevan, dan terikat dengan waktu. Dengan adanya tujuan yang jelas ini, 
                    dapat membimbing tenaga pendidikan dan siswa menuju hasil pembelajaran 
                    yang diinginkan (Solidjonov, 2024).
                `).map(paragraph => splitText(paragraph))
            },
            {
                title: "Orient Student to the Lesson",
                description: splitParagraphs(`
                    Selanjutnya, di awal pelajaran, tenaga pendidik perlu untuk 
                    membangun mental yang positif. Hal ini dapat dibangun dengan beberapa 
                    cara, seperti mewajibkan siswa datang tepat waktu. Agenda ini juga dapat 
                    digunakan untuk membangkitkan rasa ingin tahu atau minat siswa terkait 
                    pelajaran yang akan dibahas selanjutnya. Tenaga pendidik juga perlu untuk 
                    memberitahu tujuan pembelajaran yang diharapkan dicapai oleh siswa di 
                    akhir pembelajaran. Dengan memberikan tujuan pembelajaran ini, siswa 
                    juga dapat terbantu dalam hal memahami informasi yang akan diberikan 
                    (Slavin, 2012).
                `).map(paragraph => splitText(paragraph))
            },
            {
                title: "Review Prerequisites",
                description: splitParagraphs(`
                    Selanjutnya, tenaga pendidik perlu memastikan bahwa siswa telah 
                    menguasai keterampilan dasar terkait pelajaran yang akan diajarkan dan 
                    dapat mengaitkan keterampilan yang mereka miliki dengan informasi yang 
                    akan disampaikan (Slavin, 2012). Penting adanya pemanasan yang dapat 
                    mengatur ritme pembelajaran melalui kegiatan yang menyenangkan pada 
                    proses pembelajaran. Hal ini dibutuhkan untuk membangkitkan minat siswa 
                    dan mengaktifkan pengetahuan mereka dari materi yang telah disampaikan 
                    sebelumnya. Kegiatan ini dapat mencakup diskusi, permainan, ice breaking, 
                    atau kegiatan singkat lainnya yang memperkenalkan topik dan meninjau 
                    materi yang telah dipelajari sebelumnya, ibaratnya seperti menciptakan 
                    transisi yang menyenangkan dan mulus sebelum masuk ke proses 
                    penyampaian materi atau konten utama (Solidjonov, 2024).
                `).map(paragraph => splitText(paragraph))
            },
            {
                title: "Present New Material",
                description: splitParagraphs(`
                    Presentasi ini merupakan salah satu bagian rencana pembelajaran yang 
                    berfokus pada pengenalan konsep atau materi baru yang akan diajarkan. 
                    Pada rencana ini, tenaga pendidikan dapat memanfaatkan berbagai macam 
                    strategi instruksional, contohnya seperti alat bantu visual, sumber daya 
                    multimedia, dan demonstrasi interaktif untuk membuat materi baru dapat 
                    dipahami oleh siswa (Solidjonov, 2024).

                    Terdapat beberapa hal yang perlu diperhatikan dalam menyajikan 
                    informasi atau keterampilan baru, yaitu (Slavin, 2018): 

                    a. Struktur Pelajaran 
                    Pelajaran harus disajikan secara logis. Informasi yang memiliki struktur 
                    yang jelas dan terorganisasi dengan baik akan lebih mudah dipahami 
                    dan dipertahankan dibandingkan dengan informasi yang kurang jelas. 
                    penelitian mengungkapkan bahwa struktur yang ditata dengan jelas dan 
                    pernyataan transisi tentang struktur pelajaran meningkatkan 
                    pemahaman siswa. 
                    
                    b. Penekanan Pelajaran 
                    Selain memperjelas pengorganisasian pelajaran dengan mencatat 
                    subtopik selanjutnya diperkenalkan, guru yang efektif dalam 
                    pembelajaran memberikan instruksi mengenai hal-hal terpenting dari 
                    pelajaran serta mengulangi poin-poin penting dan bawa kembali ke 
                    dalam pelajaran kapanpun diperlukan. 

                    c. Kejelasan Pelajaran 
                    Salah satu ciri konsisten dari pelajaran yang efektif adalah kejelasan 
                    penggunaan bahasa yang sederhana dan terorganisasi dengan baik 
                    untuk menyajikan konsep. Membahas hal lain diluar konsep akan 
                    mengurangi dan mengganggu kejelasan pelajaran.
                    
                    d. Penjelasan 
                    Penjelasan yang efektif merupakan inti dari pengajaran yang efektif. 
                    Tinjauan penelitian terhadap penjelasan menyimpulkan bahwa 
                    penjelasan yang efektif mempertimbangkan dan mengaitkan hal yang 
                    telah diketahui siswa dan menekankan konsep dan prinsip, bukan 
                    sekedar fakta dan keterampilan. penjelasan yang efektif memanfaatkan 
                    strategi yang membantu siswa memvisualisasikan dan mengatur ide-ide 
                    kompleks serta memberikan siswa kesempatan untuk mendiskusikan 
                    pemahaman mereka dengan teman sebaya dalam kelompok 
                    pembelajaran kooperatif.
                    
                    e. Contoh yang Dikerjakan 
                    Contoh yang dikerjakan adalah strategi yang mapan untuk mengajarkan 
                    jenis pemecahan masalah tertentu, khususnya dalam matematika. 
                    Contoh yang dikerjakan sangat efektif bagi siswa yang sedang 
                    mempelajari topik atau keterampilan baru.

                    f. Demonstrasi, Model, dan Ilustrasi 
                    Teori kognitif menekankan pentingnya siswa melihat dan memiliki 
                    pengalaman langsung dengan konsep dan keterampilan. representasi 
                    visual lebih mudah disimpan dalam memori jangka panjang 
                    dibandingkan informasi yang hanya didengarkan.

                    g. Video Tertanam 
                    Video, televisi, dan DVD telah lama  digunakan dalam dunia 
                    pendidikan. penelitian tentang video tertanam menemukan bahwa hal 
                    tersebut membantu siswa belajar dan mengingat informasi hingga 
                    tingkat yang mudah dipahami dan dihubungkan dengan jelas ke konten 
                    utama.
                    
                    h. Mempertahankan Perhatian 
                    Kelas yang lurus bisa menjadi membosankan dan siswa yang merasa 
                    bosan akan segera berhenti memperhatikan bahkan pelajaran yang 
                    disusun dengan sangat cermat sekalipun. Oleh karena itu, sebaiknya 
                    memperkenalkan variasi, aktivitas, atau humor untuk memeriahkan 
                    kelas dan menjaga perhatian siswa.
                    
                    i. Cakupan Isi dan Kecepatan 
                    Salah satu faktor terpenting dalam pengajaran yang efektif adalah 
                    jumlah konten yang dicakup. Secara umum, siswa yang memiliki guru 
                    menguasai lebih banyak materi akan belajar lebih banyak dibanding 
                    siswa lain. Selain meningkatkan cakupan konten, kecepatan pengajaran 
                    yang relatif cepat juga dapat membantu pengelolaan kelas.
                `).map(paragraph => splitText(paragraph))
            },
            {
                title: "Conduct Learning",
                description: splitParagraphs(`
                    Pengajaran yang efektif mengharuskan guru untuk menyadari 
                    dampak dari instruksi yang diberikan. Seringkali guru secara keliru percaya 
                    bahwa jika mereka telah membahas suatu topik dengan baik dan siswa 
                    tampak memperhatikan, maka instruksi tersebut berhasil. Siswa sering 
                    percaya bahwa jika mereka telah mendengarkan ceramah yang menarik 
                    dengan seksaama, merekaa mengetahui materi yang dismpaikan. Namun, 
                    hal tersebut mungkin tidak benar. Guru perlu secara teratur menyelidiki 
                    pemahaman siswa tentang materi yang disajikan sehingga tidak terjadinya 
                    kesenjangan pengetahuan.  
            
                    Istilah learning probes mengacu pada berbagai cara untuk meminta 
                    tanggapan singkat siswa terhadap isi pelajaran. Learning probes 
                    memberikan guru umpan balik mengenai tingkat pemahaman siswa dan memungkinkan siswa mencoba pemahaman mereka terhadap ide baru untuk 
                    mengetahui apakah pemahaman mereka benar. Terdapat beberapa cara 
                    untuk mengetahui tingkat pemahaman siswa, yaitu (Slavin, 2018): 

                    a. Memeriksa pemahaman, menggunakan learning probes bukan untuk 
                    mengajar atau memberikan latihan melainkan untuk mengetahui 
                    apakah siswa telah memahami apa saja yang baru mereka dengar.

                    b. Pertanyaan. 
                    Pertanyaan yang diajukan kepada siswa selama 
                    pembelajaran memiliki banyak tujuan. Guru dapat menggunakan 
                    pertanyaan untuk mendorong siswa berpikir lebih jauh mengenai 
                    informasi yang mereka pelajari sebelumnya atau untuk memulai 
                    diskusi.

                    c. Menunggu. Menunggu kurang lebih 3 detik setelah mengajukan 
                    pertanyaan kepada siswa memberikan hasil belajar yang lebih baik 
                    dibandingkan menyerah lebih cepat. Penelitian menemukan bahwa 
                    guru cenderung menyerah terlalu cepat pada siswa yang mereka anggap 
                    berprestasi rendah, sebuah praktik yang menunjukkan kepada siswa 
                    bahwa guru tidak mengharapkan banyak dari mereka.  

                    d. Urutan pemanggilan. Dalam menjawab pertanyaan di kelas, urutan 
                    pemanggilan menjadi perhatian. Memanggil secara sukarelawan 
                    mungkin merupakan metode yang paling umum, namun hal ini 
                    memungkinkan beberapa siswa untuk menghindari berpartisipasi dalam 
                    pelajaran dengan tetap menundukkan tangan. Sebaiknya, guru 
                    menggunakan pemilihan metode acak untuk memanggil siswa dan 
                    menjawab pertanyaan.  

                    e. Respon seluruh siswa. Banyak guru menanyakan tanggapan semua 
                    siswa kepada siswa ketika hanya ada satu kemungkinan jawaban yang 
                    benar. Penelitian menunjukkan bahwa tipe respon seluruh siswa 
                    memiliki dampak positif terhadap pembelajaran siswa. Respon semua 
                    siswa memberi siswa banyak kesempatan untuk merespon, dan respon 
                    tersebut memberi guru informasi tentang tingkat pengetahuan dan 
                    kepercayaan diri seluruh kelas.
                `).map(paragraph => splitText(paragraph))
            },
            {
                title: "Provide Independent Practice",
                description: splitParagraphs(`
                    Istilah praktik mandiri mengacu pada pekerjaan yang dilakukan siswa 
                    di kelas secara mandiri untuk mempraktikkan atau mengekspresikan 
                    keterampilan atau pengetahuan yang baru dipelajari. Berlatih merupakan 
                    langkah penting dalam proses mentransfer informasi baru dalam memori 
                    kerja ke memori jangka panjang. Latihan mandiri paling penting ketika 
                    siswa mempelajari keterampilan, seperti matematika, membaca, tata 
                    bahasa, komposisi, atau bahasa asing. Penggunaan waktu latihan mandiri 
                    yang efektif dapat dilakukan dengan cara tidak menugaskan latihan mandiri 
                    sampai guru yakin bahwa siswa mampu melakukannya, memberikan tugas 
                    latihan mandiri yang singkat, memberi instruksi yang jelas, mulai latihan 
                    dan pastikan tidak ada interupsi, guru memonitor latihan mandiri, dan 
                    kumpulkan hasil latihan mandiri kemudian masukkan kedalam nilai (Slavin, 
                    2018). 

                    Salah satu strategi yang dapat membantu mahasiswa dalam memahami 
                    materi yang disampaikan, tenaga pendidik dapat menyediakan kesempatan 
                    bagi siswa untuk dapat berlatih. Kegiatan latihannya dapat berbentuk seperti 
                    kerja kelompok, berdiskusi, bermain peran terkait dengan materi yang akan 
                    disampaikan, agar siswa dapat mempelajari materi tersebut dengan 
                    melihatnya dalam situasi yang nyata dan bermakna (Solidjonov, 2024).
                `).map(paragraph => splitText(paragraph))
            },
            {
                title: "Assess Performance and Provide Feedback",
                description: splitParagraphs(`
                    Setiap pembelajaran hendaknya memuat penilaian sejauh mana siswa 
                    telah menguasai tujuan yang telah ditetapkan dalam pembelajaran. 
                    Penilaian dapat melibatkan pertanyaan informal kepada siswa, 
                    menggunakan kerja mandiri sebagai penilaian, dan menggunakan kuis. 
                    Secara umum, pengujian yang lebih sering menghasilkan pencapaian yang 
                    lebih besar dibandingkan pengujian yang lebih jarang, namun pengujian apa 
                    pun jauh lebih efektif daripada tidak sama sekali. Umpan balik kepada siswa 
                    memang penting, namun umpan balik kepada guru mengenai kinerja siswa 
                    mungkin lebih penting lagi. Jika siswa mempelajari semua yang diajarkan 
                    kepada mereka, kecepatan pengajaran mungkin dapat ditingkatkan. Namun, 
                    jika penilaian menunjukkan kesalahpahaman yang serius, guru dapat 
                    mengajarkan kembali pelajaran atau mengambil langkah lain untuk 
                    mengembalikan siswa ke jalur yang benar (Slavin, 2018). 

                    Penilaian merupakan salah satu bagian penting dari rencana 
                    pembelajaran karena dapat membantu tenaga pendidik dapat melihat 
                    kemajuan siswa dan tenaga pendidik memberikan umpan balik yang 
                    bermanfaat bagi perkembangan dan pemahaman pembelajaran siswa. 
                    Contohnya seperti penilaian informatif, kuis, presentasi, diskusi kelas, dapat 
                    digunakan untuk melihat sejauh mana pemahaman siswa selama 
                    pembelajaran berlangsung. Dari umpan balik dan yang dilakukan, tenaga 
                    pendidik dapat menyesuaikan konsep pembelajaran pada hari selanjutnya 
                    (Solidjonov, 2024).
                `).map(paragraph => splitText(paragraph))
            },
            {
                title: "Eksistensi dan Pengayaan",
                description: splitParagraphs(`
                    Setiap siswa tentu memiliki kebutuhan dan minat yang berbeda-beda, 
                    sehingga tenaga pendidik penting untuk memenuhi kebutuhan dan minat 
                    para siswa. Salah satu caranya adalah dengan memberikan sumber daya 
                    ekstra, kegiatan opsional, atau mungkin saja materi tambahan yang 
                    dirancang untuk memberikan tantangan kepada siswa yang sudah mahir dan 
                    membantu siswa yang memerlukan pendampingan dan pengajaran 
                    tambahan (Solidjonov, 2024).
                `).map(paragraph => splitText(paragraph))
            }
        ]
    }
};

export default BAB_II_TINJAUAN_PUSTAKA;
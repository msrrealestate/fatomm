document.addEventListener('DOMContentLoaded', () => {
    // تم التحديث هنا للباسورد والرسالة
    const SECRET_PASSWORD = "nasr w 7ob";

    const rawMessage = `اول حاجه عاوز اقولك حقك عليا يمكن جيت عليكي ي فاطمه بس انا مهما حصل وحتي لو قتلتيني مش هقدر اكرهك برضو وده مش شويه كلام وخلاص انا بجد بحبك والله  ،  وحبيت اقولك اني مش بحبك انا بحب التراب اللي بتمشي عليه حرفيا وعمري مقدرت اني اطلعك من بالي يمكن خناقتنا كتير بصراحة بس انا مش هعرف اعمل حاجه انتي ام عيالي يعني❤🤷🏻  وانا عاوز اقولك انك اهم حد ف حياتي يمكن عرفتك صدفه بس دي احسن صدفه في الدنيا❤

وعاوز برضو اقولك اني بحب كلامنا ومش عاوز اقولك بكون عامل زي العيل الصغير ونا بشوف ضحكتك❤😂 وعاوز برضو افهمك اني بحبك بجد والله بس الفكره اني مبعرفش اعبر اوي انا راجل فهماني؟ وساعات بتعصب عليكي بس انا هعمل ايه انتي حبيبتي برضو❤😂 وانا نفسي اشوفك احسن حد في الدنيا يست البنات وبعشقك والله ❤    

يا فاطمة انتي م متخيله مكانك في قلبي، ومهما حاولت اوصف ده مش هعرف اوصلك اللي في دماغي يعمري. ربنا يخليكي ليا يفطومتي وربنا يخليني ليكي حتي لو مش عوزاني❤😂 وعاوز اقولك انا بحبك ينور عيني وافتكري دايما انك اهم شخص في حياتي وانا بنيت عليكي مستقبلي وربنا يخليكي ليا ي ام نصر وحب❤😂

وربنا يبعد عنك ولاد الحلال والحرام و اي ولاد عشان بغير عليكي من الهوا اقسم بالله  وانا لو طلعت من الدنيا دي بيكي ف انا كسبت ي اجمل بنت شافتها عيوني❤،، 

بحبك يا فاطمة❤`;

    // دالة تحويل جميع الإيموجيات لإيموجي آيفون
    function parseAppleEmojis(text) {
        const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E6}-\u{1F1FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}]|[\u{200D}\u{FE0F}]/gu;
        
        const customReplacements = {
            '❤': '2764-fe0f',
            '❤️': '2764-fe0f',
            '🥹': '1f97a',
            '😂': '1f602',
            '🤷🏻': '1f937-1f3fb-200d-2642-fe0f'
        };

        let processed = text;
        for (const [key, code] of Object.entries(customReplacements)) {
            const reg = new RegExp(key, 'g');
            processed = processed.replace(reg, `<img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/${code}.png" class="apple-emoji">`);
        }

        return processed.replace(emojiRegex, (match) => {
            if (match === '\uFE0F' || match === '\u200D') return '';
            const hexPoints = Array.from(match).map(c => c.codePointAt(0).toString(16)).join('-');
            return `<img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/${hexPoints}.png" class="apple-emoji" onerror="this.outerHTML='${match}'">`;
        });
    }

    const lockScreen = document.getElementById('lockScreen');
    const mainContent = document.getElementById('mainContent');
    const passInput = document.getElementById('passInput');
    const unlockBtn = document.getElementById('unlockBtn');
    const errorMsg = document.getElementById('errorMsg');
    const audio = document.getElementById('audioPlayer');

    const playlist = [
        { title: "وانت معايا يفطومتي", artist: "عمرو دياب - باين حبيت", src: "song1.mp3" },
        { title: "كلمة", artist: "رامي صبري", src: "song2.mp3" }
    ];

    let currentIndex = 0;

    function checkPassword() {
        const enteredVal = passInput.value.trim().toLowerCase();
        if (enteredVal === SECRET_PASSWORD) {
            lockScreen.style.display = 'none';
            mainContent.classList.remove('hidden');

            loadTrack(currentIndex);
            audio.play().then(() => {
                playBtn.innerText = '❚❚';
            }).catch(() => {});

            triggerFlowerExplosionAndFall();
            startHearts();
            setTimeout(startTypewriter, 500);

        } else {
            errorMsg.style.display = 'block';
            passInput.style.borderColor = '#ff4d6d';
        }
    }

    unlockBtn.addEventListener('click', checkPassword);
    passInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPassword();
    });

    function triggerFlowerExplosionAndFall() {
        const petalsShower = document.getElementById('petalsShower');
        petalsShower.innerHTML = ''; 

        const petalImages = [
            'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/1f338.png',
            'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/1f339.png',
            'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/1f33a.png',
            'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/1f33b.png',
            'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/2728.png'
        ];

        for (let i = 0; i < 65; i++) {
            const petal = document.createElement('img');
            petal.src = petalImages[Math.floor(Math.random() * petalImages.length)];
            petal.classList.add('burst-petal', 'apple-emoji');

            petal.style.left = Math.random() * 95 + 'vw';
            petal.style.top = Math.random() * 95 + 'vh';

            const size = Math.random() * 22 + 20; 
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';

            const dropDelay = Math.random() * 0.7 + 0.3;
            const dropDuration = Math.random() * 2.5 + 3.5;

            petal.style.animation = `popIn 0.3s ease-out forwards, fallDown ${dropDuration}s ease-in ${dropDelay}s forwards`;

            petalsShower.appendChild(petal);

            setTimeout(() => petal.remove(), (dropDelay + dropDuration + 0.5) * 1000);
        }
    }

    function startTypewriter() {
        const textEl = document.getElementById('typewriterText');
        const cursor = document.querySelector('.blinking-cursor');
        textEl.innerHTML = ""; 
        
        const htmlContent = parseAppleEmojis(rawMessage);
        
        const tokens = [];
        let i = 0;
        while (i < htmlContent.length) {
            if (htmlContent[i] === '<') {
                let tag = '';
                while (i < htmlContent.length && htmlContent[i] !== '>') {
                    tag += htmlContent[i];
                    i++;
                }
                if (i < htmlContent.length) {
                    tag += htmlContent[i];
                    i++;
                }
                tokens.push(tag);
            } else {
                tokens.push(htmlContent[i]);
                i++;
            }
        }

        let tokenIndex = 0;
        function typeToken() {
            if (tokenIndex < tokens.length) {
                textEl.innerHTML += tokens[tokenIndex];
                tokenIndex++;
                setTimeout(typeToken, 65);
            } else {
                if (cursor) cursor.style.display = 'none';
            }
        }
        typeToken();
    }

    document.addEventListener('click', (e) => {
        if (lockScreen.style.display === 'none') {
            const heart = document.createElement('img');
            heart.src = 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/1f496.png';
            heart.classList.add('touch-heart', 'apple-emoji');
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1200);
        }
    });

    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const seekBar = document.getElementById('seekBar');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');

    function loadTrack(index) {
        const track = playlist[index];
        audio.src = track.src;
        document.querySelector('.track-title').innerText = track.title;
        document.querySelector('.artist-name').innerText = track.artist;
        seekBar.value = 0;
        currentTimeEl.innerText = "0:00";
    }

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerText = '❚❚';
        } else {
            audio.pause();
            playBtn.innerText = '▶';
        }
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % playlist.length;
        loadTrack(currentIndex);
        audio.play();
        playBtn.innerText = '❚❚';
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
        loadTrack(currentIndex);
        audio.play();
        playBtn.innerText = '❚❚';
    });

    function formatTime(sec) {
        if (isNaN(sec)) return "0:00";
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    audio.addEventListener('loadedmetadata', () => {
        durationEl.innerText = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            seekBar.value = (audio.currentTime / audio.duration) * 100;
            currentTimeEl.innerText = formatTime(audio.currentTime);
        }
    });

    seekBar.addEventListener('input', () => {
        if (audio.duration) {
            audio.currentTime = (seekBar.value / 100) * audio.duration;
        }
    });

    audio.addEventListener('ended', () => { nextBtn.click(); });

    function startHearts() {
        const heartsContainer = document.getElementById('heartsContainer');
        const appleHeartCodes = [
            'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/1f496.png',
            'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/1f495.png',
            'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/2728.png',
            'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/2764-fe0f.png'
        ];

        function spawnHeart() {
            const heartImg = document.createElement('img');
            heartImg.classList.add('floating-heart', 'apple-emoji');
            heartImg.src = appleHeartCodes[Math.floor(Math.random() * appleHeartCodes.length)];
            heartImg.style.left = Math.random() * 100 + 'vw';
            heartImg.style.animationDuration = (Math.random() * 2 + 5) + 's';
            
            const size = Math.random() * 8 + 16;
            heartImg.style.width = size + 'px';
            heartImg.style.height = size + 'px';

            heartsContainer.appendChild(heartImg);
            setTimeout(() => heartImg.remove(), 7000);
        }

        setInterval(spawnHeart, 900);
    }
});
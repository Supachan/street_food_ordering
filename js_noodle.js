function generateContent() {

    const displayArea = document.getElementById('sum_content');
    displayArea.innerHTML = ''; // Clear previous content
    
    // Display checked radio buttons
    document.querySelectorAll('input[name="radioGroup_items"]:checked').forEach(function(radio) {
        displayArea.innerHTML += 'รายการที่ใส่ คือ: ' + radio.value + ', ';
    });
    
    // Display checked checkboxes
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
        displayArea.innerHTML += checkbox.value + ', ';
    });
    
}

function create_keys_values(item,radio_checkbox_name) {
    return {
        id: item,
        name: radio_checkbox_name,
        value: item,
        label: item,
        imageSrc: 'images/' + item + '.jpg',
        videoSrc: 'video/'  + item + '.mp4'
      };
}

// ก๋วยเตี๋ยว
// SubMenu = ประเภทเส้น
function createCheckboxes_noodle(SubMenu, option) {
    const container = document.getElementById('checkboxContainer1');
    container.innerHTML = `<h2>${SubMenu}</h2>`;
    container.appendChild(document.createElement('br'));
    const radio_checkbox_name = 'radioGroup_items'
    const checkboxData = {
        น้ำใส: [
            create_keys_values('เส้นเล็ก',radio_checkbox_name),
            create_keys_values('เส้นใหญ่',radio_checkbox_name),
            create_keys_values('เส้นหมี่',radio_checkbox_name),
            create_keys_values('บะหมี่',radio_checkbox_name),
            // create_keys_values('เกียมอี๋',radio_checkbox_name),
            // create_keys_values('ก๋วยจั๊บ',radio_checkbox_name),
        ],
        ต้มยำน้ำใส: [
            create_keys_values('เส้นเล็ก',radio_checkbox_name),
            create_keys_values('เส้นใหญ่',radio_checkbox_name),
            create_keys_values('เส้นหมี่',radio_checkbox_name),
            create_keys_values('บะหมี่',radio_checkbox_name),
            // create_keys_values('เกียมอี๋',radio_checkbox_name),
            // create_keys_values('ก๋วยจั๊บ',radio_checkbox_name),
        ],
        ต้มยำน้ำข้น: [
            create_keys_values('เส้นเล็ก',radio_checkbox_name),
            create_keys_values('เส้นใหญ่',radio_checkbox_name),
            create_keys_values('เส้นหมี่',radio_checkbox_name),
            create_keys_values('บะหมี่',radio_checkbox_name),
            // create_keys_values('เกียมอี๋',radio_checkbox_name),
            // create_keys_values('ก๋วยจั๊บ',radio_checkbox_name),
        ],
        น้ำตก: [
            create_keys_values('เส้นเล็ก',radio_checkbox_name),
            create_keys_values('เส้นใหญ่',radio_checkbox_name),
            create_keys_values('เส้นหมี่',radio_checkbox_name),
            create_keys_values('บะหมี่',radio_checkbox_name),
            // create_keys_values('เกียมอี๋',radio_checkbox_name),
            // create_keys_values('ก๋วยจั๊บ',radio_checkbox_name),
        ],
        เย็นตาโฟ: [
            create_keys_values('เส้นเล็ก',radio_checkbox_name),
            create_keys_values('เส้นใหญ่',radio_checkbox_name),
            create_keys_values('เส้นหมี่',radio_checkbox_name),
            create_keys_values('บะหมี่',radio_checkbox_name),
            // create_keys_values('เกียมอี๋',radio_checkbox_name),
            // create_keys_values('ก๋วยจั๊บ',radio_checkbox_name),
        ],
        // ก๋วยจั๊บ: [
            // { id: 'เส้นเล็ก', name: 'radioGroup_items', value: 'เส้นเล็ก', label: 'เส้นเล็ก', imageSrc: 'เส้นเล็ก', videoSrc: 'เส้นเล็ก'},
            // { id: 'เส้นใหญ่', name: 'radioGroup_items', value: 'เส้นใหญ่', label: 'เส้นใหญ่', imageSrc: 'เส้นใหญ่', videoSrc: 'เส้นใหญ่'},
            // { id: 'เส้นหมี่', name: 'radioGroup_items', value: 'เส้นหมี่', label: 'เส้นหมี่', imageSrc: 'เส้นหมี่', videoSrc: 'เส้นหมี่'},
            // { id: 'บะหมี่', name: 'radioGroup_items', value: 'บะหมี่', label: 'บะหมี่', imageSrc: 'บะหมี่', videoSrc: 'บะหมี่'},
            // // { id: 'เกียมอี๋', name: 'radioGroup_items', value: 'เกียมอี๋', label: 'เกียมอี๋', imageSrc: 'เกียมอี๋', videoSrc: 'เกียมอี๋'},
            // { id: 'ก๋วยจั๊บ', name: 'radioGroup_items', value: 'ก๋วยจั๊บ', label: 'ก๋วยจั๊บ', imageSrc: 'ก๋วยจั๊บ', videoSrc: 'ก๋วยจั๊บ'}
        // ],
    };
    const selectedCheckboxData = checkboxData[option];
    selectedCheckboxData.forEach(item => {
        const text     = item['id'];
        const imageSrc = item['imageSrc'];
        const videoSrc = item['videoSrc'];
        divWithColumns = createDivWithFileColumns_radio_btn(text, imageSrc, videoSrc,radio_checkbox_name)
        container.appendChild(divWithColumns);
    });
}

// SubMenu = ประเภทเนื้อ
function createCheckboxes_meat(SubMenu, option) {
    const container = document.getElementById('checkboxContainer2');
    container.innerHTML = `<h2>${SubMenu}</h2>`;
    container.appendChild(document.createElement('br'));
    const radio_checkbox_name = 'checkboxGroup'
    const checkboxData = {
        น้ำใส: [
            create_keys_values('เนื้อหมู',radio_checkbox_name),
            create_keys_values('เนื้อสด',radio_checkbox_name),
            create_keys_values('เนื้อเปื่อย',radio_checkbox_name),
            create_keys_values('เนื้อปลา',radio_checkbox_name),
            create_keys_values('ปลาหมึก',radio_checkbox_name),
            create_keys_values('หมูกรอบ',radio_checkbox_name),
        ],
        ต้มยำน้ำใส: [
            create_keys_values('เนื้อหมู',radio_checkbox_name),
            create_keys_values('เนื้อสด',radio_checkbox_name),
            create_keys_values('เนื้อเปื่อย',radio_checkbox_name),
            create_keys_values('เนื้อปลา',radio_checkbox_name),
            // create_keys_values('ปลาหมึก',radio_checkbox_name),
            // create_keys_values('หมูกรอบ',radio_checkbox_name),
        ],
        ต้มยำน้ำข้น: [
            create_keys_values('เนื้อหมู',radio_checkbox_name),
            create_keys_values('เนื้อสด',radio_checkbox_name),
            create_keys_values('เนื้อเปื่อย',radio_checkbox_name),
            create_keys_values('เนื้อปลา',radio_checkbox_name),
            // create_keys_values('ปลาหมึก',radio_checkbox_name),
            // create_keys_values('หมูกรอบ',radio_checkbox_name),
        ],
        น้ำตก: [
            create_keys_values('เนื้อหมู',radio_checkbox_name),
            create_keys_values('เนื้อสด',radio_checkbox_name),
            create_keys_values('เนื้อเปื่อย',radio_checkbox_name),
            // create_keys_values('เนื้อปลา',radio_checkbox_name),
            // create_keys_values('ปลาหมึก',radio_checkbox_name),
            // create_keys_values('หมูกรอบ',radio_checkbox_name),
        ],
        เย็นตาโฟ: [
            // create_keys_values('เนื้อหมู',radio_checkbox_name),
            // create_keys_values('เนื้อสด',radio_checkbox_name),
            // create_keys_values('เนื้อเปื่อย',radio_checkbox_name),
            // create_keys_values('เนื้อปลา',radio_checkbox_name),
            create_keys_values('ปลาหมึก',radio_checkbox_name),
            // create_keys_values('หมูกรอบ',radio_checkbox_name),
        ],
        // ก๋วยจั๊บ: [
        //     { id: 'เนื้อหมู', name: 'checkboxGroup', value: 'เนื้อหมู', label: 'เนื้อหมู', imageSrc: 'เนื้อหมู', videoSrc: 'เนื้อหมู'},
            // { id: 'เนื้อสด', name: 'checkboxGroup', value: 'เนื้อสด', label: 'เนื้อสด', imageSrc: 'เนื้อสด', videoSrc: 'เนื้อสด'},
            // { id: 'เนื้อเปื่อย', name: 'checkboxGroup', value: 'เนื้อเปื่อย', label: 'เนื้อเปื่อย', imageSrc: 'เนื้อเปื่อย', videoSrc: 'เนื้อเปื่อย'},
            // { id: 'เนื้อปลา', name: 'checkboxGroup', value: 'เนื้อปลา', label: 'เนื้อปลา', imageSrc: 'เนื้อปลา', videoSrc: 'เนื้อปลา'},
            // { id: 'ปลาหมึก', name: 'checkboxGroup', value: 'ปลาหมึก', label: 'ปลาหมึก', imageSrc: 'ปลาหมึก', videoSrc: 'ปลาหมึก'},
        //     { id: 'หมูกรอบ', name: 'checkboxGroup', value: 'หมูกรอบ', label: 'หมูกรอบ', imageSrc: 'หมูกรอบ', videoSrc: 'หมูกรอบ'}
        // ],
    };

    const selectedCheckboxData = checkboxData[option];
    selectedCheckboxData.forEach(item => {
        const text     = item['id'];
        const imageSrc = item['imageSrc'];
        const videoSrc = item['videoSrc'];
        divWithColumns = createDivWithFileColumns_checkboxes(text, imageSrc, videoSrc,radio_checkbox_name)
        container.appendChild(divWithColumns);
    });
}

// SubMenu = ประเภทลูกชิ้น
function createCheckboxes_ball(SubMenu, option) {
    const container = document.getElementById('checkboxContainer3');
    container.innerHTML = `<h2>${SubMenu}</h2>`;
    container.appendChild(document.createElement('br'));
    const radio_checkbox_name = 'checkboxGroup'
    const checkboxData = {
        น้ำใส: [
            create_keys_values('ลูกชิ้นหมู',radio_checkbox_name),
            create_keys_values('ลูกชิ้นเนื้อ',radio_checkbox_name),
            // create_keys_values('ลูกชิ้นแคะ',radio_checkbox_name),
            create_keys_values('ลูกชิ้นปลา',radio_checkbox_name),
            create_keys_values('ลูกชิ้นกุ้ง',radio_checkbox_name),
        ],
        ต้มยำน้ำใส: [
            create_keys_values('ลูกชิ้นหมู',radio_checkbox_name),
            create_keys_values('ลูกชิ้นเนื้อ',radio_checkbox_name),
            // create_keys_values('ลูกชิ้นแคะ',radio_checkbox_name),
            create_keys_values('ลูกชิ้นปลา',radio_checkbox_name),
            create_keys_values('ลูกชิ้นกุ้ง',radio_checkbox_name),
        ],
        ต้มยำน้ำข้น: [
            create_keys_values('ลูกชิ้นหมู',radio_checkbox_name),
            create_keys_values('ลูกชิ้นเนื้อ',radio_checkbox_name),
            // create_keys_values('ลูกชิ้นแคะ',radio_checkbox_name),
            create_keys_values('ลูกชิ้นปลา',radio_checkbox_name),
            create_keys_values('ลูกชิ้นกุ้ง',radio_checkbox_name),
        ],
        น้ำตก: [
            create_keys_values('ลูกชิ้นหมู',radio_checkbox_name),
            create_keys_values('ลูกชิ้นเนื้อ',radio_checkbox_name),
            // create_keys_values('ลูกชิ้นแคะ',radio_checkbox_name),
            // create_keys_values('ลูกชิ้นปลา',radio_checkbox_name),
            // create_keys_values('ลูกชิ้นกุ้ง',radio_checkbox_name),
        ],
        เย็นตาโฟ: [
            // create_keys_values('ลูกชิ้นหมู',radio_checkbox_name),
            // create_keys_values('ลูกชิ้นเนื้อ',radio_checkbox_name),
            create_keys_values('ลูกชิ้นแคะ',radio_checkbox_name),
            create_keys_values('ลูกชิ้นปลา',radio_checkbox_name),
            create_keys_values('ลูกชิ้นกุ้ง',radio_checkbox_name),
        ],
        // ก๋วยจั๊บ: [
            // { id: 'ลูกชิ้นหมู', name: 'checkboxGroup', value: 'ลูกชิ้นหมู', label: 'ลูกชิ้นหมู', imageSrc: 'ลูกชิ้นหมู', videoSrc: 'ลูกชิ้นหมู'},
            // { id: 'ลูกชิ้นเนื้อ', name: 'checkboxGroup', value: 'ลูกชิ้นเนื้อ', label: 'ลูกชิ้นเนื้อ', imageSrc: 'ลูกชิ้นเนื้อ', videoSrc: 'ลูกชิ้นเนื้อ'},
            // { id: 'ลูกชิ้นแคะ', name: 'checkboxGroup', value: 'ลูกชิ้นแคะ', label: 'ลูกชิ้นแคะ', imageSrc: 'ลูกชิ้นแคะ', videoSrc: 'ลูกชิ้นแคะ'},
            // { id: 'ลูกชิ้นปลา', name: 'checkboxGroup', value: 'ลูกชิ้นปลา', label: 'ลูกชิ้นปลา', imageSrc: 'ลูกชิ้นปลา', videoSrc: 'ลูกชิ้นปลา'},
            // { id: 'ลูกชิ้นกุ้ง',  name: 'checkboxGroup', value: 'ลูกชิ้นกุ้ง', label: 'ลูกชิ้นกุ้ง', imageSrc: 'ลูกชิ้นกุ้ง', videoSrc: 'ลูกชิ้นกุ้ง'}
        //     { id: 'ไม่มีลูกชิ้น', name: 'checkboxGroup', value: 'ไม่มีลูกชิ้น', label: 'ไม่มีลูกชิ้น', imageSrc: 'ไม่มีลูกชิ้น', videoSrc: 'ไม่มีลูกชิ้น'}
        // ],
    };

    const selectedCheckboxData = checkboxData[option];
    selectedCheckboxData.forEach(item => {
        const text     = item['id'];
        const imageSrc = item['imageSrc'];
        const videoSrc = item['videoSrc'];
        // divWithColumns = createDivWithFileColumns_checkboxes(text, imageSrc, videoSrc)
        divWithColumns = createDivWithFileColumns_checkboxes(text, imageSrc, videoSrc,radio_checkbox_name)
        container.appendChild(divWithColumns);
    });

}

// Submenu = รายการที่ ไม่ต้องการใส่
function createCheckboxes_no_items_need(SubMenu, option) {
    const container = document.getElementById('checkboxContainer4');
    container.innerHTML = `<h2>${SubMenu}</h2>`;
    container.appendChild(document.createElement('br'));
    const radio_checkbox_name = 'checkboxGroup'
    const checkboxData = {
        น้ำใส: [
            create_keys_values('ถั่วงอก',radio_checkbox_name),
            create_keys_values('ผัก',radio_checkbox_name),
            create_keys_values('เต้าหู้',radio_checkbox_name),
            create_keys_values('เครื่องใน',radio_checkbox_name),
        ],
        ต้มยำน้ำใส: [
            create_keys_values('ถั่วงอก',radio_checkbox_name),
            create_keys_values('ผัก',radio_checkbox_name),
            // create_keys_values('เต้าหู้',radio_checkbox_name),
            create_keys_values('เครื่องใน',radio_checkbox_name),
        ],
        ต้มยำน้ำข้น: [
            create_keys_values('ถั่วงอก',radio_checkbox_name),
            create_keys_values('ผัก',radio_checkbox_name),
            // create_keys_values('เต้าหู้',radio_checkbox_name),
            create_keys_values('เครื่องใน',radio_checkbox_name),
        ],
        น้ำตก: [
            create_keys_values('ถั่วงอก',radio_checkbox_name),
            create_keys_values('ผัก',radio_checkbox_name),
            // create_keys_values('เต้าหู้',radio_checkbox_name),
            create_keys_values('เครื่องใน',radio_checkbox_name),        
        ],
        เย็นตาโฟ: [
            create_keys_values('ถั่วงอก',radio_checkbox_name),
            create_keys_values('ผัก',radio_checkbox_name),
            create_keys_values('เต้าหู้',radio_checkbox_name),
            // create_keys_values('เครื่องใน',radio_checkbox_name),        
        ],
        // ก๋วยจั๊บ: [
        //     { id: 'ถั่วงอก', name: 'checkboxGroup', value: 'ถั่วงอก', label: 'ถั่วงอก', imageSrc: 'ถั่วงอก', videoSrc: 'ถั่วงอก'},
        //     { id: 'ผัก', name: 'checkboxGroup', value: 'ผัก', label: 'ผัก', imageSrc: 'ผัก', videoSrc: 'ผัก'},
            // { id: 'เต้าหู้', name: 'checkboxGroup', value: 'เต้าหู้', label: 'เต้าหู้', imageSrc: 'เต้าหู้', videoSrc: 'เต้าหู้'},
            // { id: 'เครื่องใน', name: 'checkboxGroup', value: 'เครื่องใน', label: 'เครื่องใน', imageSrc: 'เครื่องใน', videoSrc: 'เครื่องใน'}
        // ],
    };

    const selectedCheckboxData = checkboxData[option];
    selectedCheckboxData.forEach(item => {
        const text     = 'ไม่ใส่'+item['id'];
        const imageSrc = item['imageSrc'];
        const videoSrc = item['videoSrc'];
        // console.log('OOO',text,imageSrc,videoSrc)
        // divWithColumns = createDivWithFileColumns_checkboxes(text, imageSrc, videoSrc)
        divWithColumns = createDivWithFileColumns_checkboxes(text, imageSrc, videoSrc,radio_checkbox_name)
        container.appendChild(divWithColumns);
    });

}

function getSelectedValues(radio_checkbox_name) {
    const selectedValues = [];
    // Get all checkboxes with class checkboxClass
    const checkboxes = document.querySelectorAll(`input[name=${radio_checkbox_name}]:checked`);
    // Loop through checked checkboxes and push their values to the array
    checkboxes.forEach(checkbox => {
        selectedValues.push(checkbox.value);
    });

    // Log selected values
    console.log(`Selected values for ${radio_checkbox_name}:`, selectedValues);
    return selectedValues;
}

// แสดง playlisted audios
async function playAudio(audios,index) {
    return new Promise(resolve => {
      audios[index].play()
      audios[index].addEventListener('ended', () => {
        console.log(`${index} ended`)
        resolve()
      })
    })
  }

function text_to_speech() {
    const listArray  = getSelectedValues('checkboxGroup'); 
    const listArray1 = getSelectedValues('radioGroup') 
    const button = document.getElementById('summaryButton');
    button.addEventListener('click', async function () {
        const audios = []
        i = 0;
        for (i==0;i<listArray.length;i++) {
            const audio = new Audio(`audio_files/${listArray[i]}.mp3`);
            audios.push(audio)
        }

        console.log(audios)
        k = 0;
        for (k==0;k<listArray.length;k++) {
            await playAudio(audios,k)
        }
    })
}

function transcribeSelectedValues() {
    const selectedValues  = getSelectedValues('checkboxGroup');     // boxes checkboxGroup
    const selectedRadio   = getSelectedValues('radioGroup');        // radio btn
    const selectedRadio1  = getSelectedValues('radioGroup_items');  // radio btn item

    // Check if there are selected values
    // if (selectedValues.length === 0) {
    //     console.log('No selected values to transcribe.');
    //     return;
    // }

    // Create a SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(); // <<< Speech API
    utterance.lang = 'th-TH'; // Set the language to Thai

    // Combine the selected values into a single string
    const transcription      = selectedValues.join(', ');
    const transcription_item = selectedRadio1.join(', ');
    const transcription_main = selectedRadio.join(', ');

    // Set the text to be spoken
    utterance.text = 'เราอยากได้ ก๋วยเตี๋ยว'+transcription_main + 'รายการที่ใส่ คือ: ' + transcription_item + transcription;

    // Speak the text
    speechSynthesis.speak(utterance);
}

function navigateToPageNoodle(noodle_type) {
    createCheckboxes_noodle('1 ประเภทเส้น',noodle_type)
    createCheckboxes_meat('2 ประเภทเนื้อ',noodle_type)
    createCheckboxes_ball('3 ประเภทลูกชิ้น',noodle_type)
    createCheckboxes_no_items_need('4 รายการที่ไม่ต้องการใส่',noodle_type)
}

//  main function
function createRadioButtons_noodles() { // step 2
    const items = Array('น้ำใส','ต้มยำน้ำใส','ต้มยำน้ำข้น','น้ำตก','เย็นตาโฟ')
    const container = document.getElementById('checkboxContainer_items');
    const radio_checkbox_name = 'radioGroup';
    // Clear previous radio buttons
    container.innerHTML = '';

    // Create and append radio buttons
    for (let i = 0; i < items.length; i++) {
        const item = create_keys_values(items[i],radio_checkbox_name);
        const text     = item['id']
        const imageSrc = item['imageSrc']
        const videoSrc = item['videoSrc']
        // create three columns in DIV
        const divWithColumns = createDivWithFileColumns_radio_btn(text, imageSrc, videoSrc, radio_checkbox_name);
        container.appendChild(divWithColumns);
    }

    let selectedValue = null;
    container.addEventListener('change', function() {
        const selectedRadioButton = document.querySelector('input[name="radioGroup"]:checked');
        if (selectedRadioButton) {
            selectedValue = selectedRadioButton.value;
            console.log('Selected radio button:', selectedRadioButton.value);
            
            navigateToPageNoodle(selectedValue)
            // display text
            document.getElementById('content').innerHTML = `เราอยากได้ ก๋วยเตี๋ยว${selectedValue}`;
            document.querySelectorAll('input[name="radioGroup_items"], input[type="checkbox"]').forEach(function(input) {
                input.addEventListener('change', generateContent);
              });

        } else {
            selectedValue = null;
            console.log('No radio button selected.');
        }
    });
    
    return selectedValue;
}

// เลือกอย่างเดียว
function createDivWithFileColumns_radio_btn(text, imageSrc, videoSrc, radio_checkbox_name) {
    // Create a container div
    const container = document.createElement('div');
    container.classList.add('container');

    // Create three columns: text, image, and video
    const columnsData = [
        { label: 'Text', value: text },
        { label: 'Image', value: imageSrc },
        { label: 'Video', value: videoSrc }
    ];

    columnsData.forEach(data => {
        const column = document.createElement('div');
        column.classList.add('one-column');

        // Create corresponding content for the column
        if (data.label === 'Text') {
            const radioBtn = document.createElement('input');
            const label = document.createElement('label');
            radioBtn.type = 'radio';
            radioBtn.name = radio_checkbox_name;
            radioBtn.classList.add('radio-btn')
            radioBtn.id = 'radioButton' + data.value;
            radioBtn.value = data.value;
            
            const labelText = document.createTextNode(data.value);
            label.classList.add('label-radio-btn')
            label.style.backgroundColor = 'red';
            label.style.color = 'white';
            label.appendChild(radioBtn);
            label.appendChild(labelText);

            column.appendChild(label);

        } else if (data.label === 'Image' || data.label === 'Video') {
            const media = document.createElement(data.label === 'Image' ? 'img' : 'video');
            media.classList.add('media');
            media.src = data.value;
            if (data.label === 'Video') {media.controls = true;}
            column.appendChild(media);
        }
        container.appendChild(column);
    });

    return container;
}

// เลือกได้ทุกอย่าง
function createDivWithFileColumns_checkboxes(text, imageSrc, videoSrc, radio_checkbox_name) {
    // Create a container div
    const container = document.createElement('div');
    container.classList.add('container');

    // Create three columns: text, image, and video
    const columnsData = [
        { label: 'Text', value: text },
        { label: 'Image', value: imageSrc },
        { label: 'Video', value: videoSrc }
    ];
    // const columns = document.createElement('div');
    // columns.classList.add('three-columns');

    columnsData.forEach(data => {
        const column = document.createElement('div');
        column.classList.add('one-column');

        // Create corresponding content for the column
        if (data.label === 'Text') {
            const checkbox = document.createElement('input');
            const label = document.createElement('label');
            checkbox.type = 'checkbox';
            checkbox.className = 'checkboxClass';
            // checkbox.name = data.name;
            checkbox.name = radio_checkbox_name;
            checkbox.classList.add('checkbox')
            checkbox.id = data.id;
            checkbox.value = data.value;
            
            const labelText = document.createTextNode(data.value);
            label.classList.add('label-checkbox')
            label.style.backgroundColor = 'yellow';
            label.style.color = 'black';
            label.appendChild(checkbox);
            label.appendChild(labelText);

            column.appendChild(label);

        } else if (data.label === 'Image' || data.label === 'Video') {
            const media = document.createElement(data.label === 'Image' ? 'img' : 'video');
            media.classList.add('media');
            media.src = data.value;
            if (data.label === 'Video') {media.controls = true;}
            column.appendChild(media);
        }
        container.appendChild(column);
    });

    return container;
}

createRadioButtons_noodles() // step 1
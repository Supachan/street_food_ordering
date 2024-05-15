function generateContent() {

    const displayArea = document.getElementById('sum_content');
    displayArea.innerHTML = 'รายการที่ใส่ คือ: '; // Clear previous content
    
    // Display checked checkboxes
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
        displayArea.innerHTML += checkbox.value + ', ';
    });


    document.querySelectorAll('input[name="radioGroup_items_spicy"]:checked').forEach(function(radio) {
        displayArea.innerHTML += radio.value + ', ';
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
// SubMenu = วัตถุใส่ดิบเพิ่ม
function createCheckboxes_somtum_add(SubMenu, option) {
    const container = document.getElementById('checkboxContainer1');
    container.innerHTML = `<h2>${SubMenu}</h2>`;
    container.appendChild(document.createElement('br'));
    const radio_checkbox_name = 'checkboxGroup'
    const checkboxData = {
        ส้มตำปู: [
            create_keys_values('น้ำปลาร้า',radio_checkbox_name),
            create_keys_values('ไข่เค็ม',radio_checkbox_name),
            // create_keys_values('ขนมจีน',radio_checkbox_name),
            create_keys_values('น้ำตาล',radio_checkbox_name),
            create_keys_values('น้ำปลา',radio_checkbox_name),
        ],
        ส้มตำไทย: [
            // create_keys_values('น้ำปลาร้า',radio_checkbox_name),
            create_keys_values('ไข่เค็ม',radio_checkbox_name),
            // create_keys_values('ขนมจีน',radio_checkbox_name),
            create_keys_values('น้ำตาล',radio_checkbox_name),
            create_keys_values('น้ำปลา',radio_checkbox_name),
        ],
        ส้มตำถั่วฝักยาว: [
            // create_keys_values('น้ำปลาร้า',radio_checkbox_name),
            create_keys_values('ไข่เค็ม',radio_checkbox_name),
            // create_keys_values('ขนมจีน',radio_checkbox_name),
            create_keys_values('น้ำตาล',radio_checkbox_name),
            create_keys_values('น้ำปลา',radio_checkbox_name),
        ],
        ส้มตำข้าวโพด: [
            create_keys_values('น้ำปลาร้า',radio_checkbox_name),
            create_keys_values('ไข่เค็ม',radio_checkbox_name),
            // create_keys_values('ขนมจีน',radio_checkbox_name),
            create_keys_values('น้ำตาล',radio_checkbox_name),
            create_keys_values('น้ำปลา',radio_checkbox_name),
        ],
        ส้มตำซั่ว: [
            create_keys_values('น้ำปลาร้า',radio_checkbox_name),
            create_keys_values('ไข่เค็ม',radio_checkbox_name),
            create_keys_values('ขนมจีน',radio_checkbox_name),
            create_keys_values('น้ำตาล',radio_checkbox_name),
            create_keys_values('น้ำปลา',radio_checkbox_name),
        ],
    };
    const selectedCheckboxData = checkboxData[option];
    selectedCheckboxData.forEach(item => {
        const text     = item['id'];
        const imageSrc = item['imageSrc'];
        const videoSrc = item['videoSrc'];
        divWithColumns = createDivWithFileColumns_checkboxes(text, imageSrc, videoSrc, radio_checkbox_name)
        container.appendChild(divWithColumns);
    });
}

// SubMenu = รายการที่ไม่ต้องการใส่
function createCheckboxes_somtum_no(SubMenu, option) {
    const container = document.getElementById('checkboxContainer2');
    container.innerHTML = `<h2>${SubMenu}</h2>`;
    container.appendChild(document.createElement('br'));
    const radio_checkbox_name = 'checkboxGroup'
    const checkboxData = {
        ส้มตำปู: [
            create_keys_values('ไม่ใส่ผงชูรส',radio_checkbox_name),
            create_keys_values('ไม่ใส่ปู',radio_checkbox_name),
            // create_keys_values('ไม่ใส่กุ้งแห้ง',radio_checkbox_name),
        ],
        ส้มตำไทย: [
            create_keys_values('ไม่ใส่ผงชูรส',radio_checkbox_name),
            // create_keys_values('ไม่ใส่ปู',radio_checkbox_name),
            create_keys_values('ไม่ใส่กุ้งแห้ง',radio_checkbox_name),
        ],
        ส้มตำถั่วฝักยาว: [
            create_keys_values('ไม่ใส่ผงชูรส',radio_checkbox_name),
            // create_keys_values('ไม่ใส่ปู',radio_checkbox_name),
            create_keys_values('ไม่ใส่กุ้งแห้ง',radio_checkbox_name),
        ],
        ส้มตำข้าวโพด: [
            create_keys_values('ไม่ใส่ผงชูรส',radio_checkbox_name),
            // create_keys_values('ไม่ใส่ปู',radio_checkbox_name),
            create_keys_values('ไม่ใส่กุ้งแห้ง',radio_checkbox_name),
        ],
        ส้มตำซั่ว: [
            create_keys_values('ไม่ใส่ผงชูรส',radio_checkbox_name),
            create_keys_values('ไม่ใส่ปู',radio_checkbox_name),
            // create_keys_values('ไม่ใส่กุ้งแห้ง',radio_checkbox_name),
        ],
    };

    const selectedCheckboxData = checkboxData[option];
    selectedCheckboxData.forEach(item => {
        const text     = item['id'];
        const imageSrc = item['imageSrc'];
        const videoSrc = item['videoSrc'];
        divWithColumns = createDivWithFileColumns_checkboxes(text, imageSrc, videoSrc, radio_checkbox_name)
        container.appendChild(divWithColumns);
    });
}
// SubMenu = ระดับความเผ็ด
function createCheckboxes_somtum_spicylevel(SubMenu, option) {
    const container = document.getElementById('checkboxContainer3');
    container.innerHTML = `<h2>${SubMenu}</h2>`;
    container.appendChild(document.createElement('br'));
    const radio_checkbox_name = 'radioGroup_items_spicy'
    const checkboxData = {
        ส้มตำปู: [
            create_keys_values('ไม่เผ็ด',radio_checkbox_name),
            create_keys_values('เผ็ดน้อย',radio_checkbox_name),
            create_keys_values('เผ็ดปานกลาง',radio_checkbox_name),
            create_keys_values('เผ็ดมาก',radio_checkbox_name),
        ],
        ส้มตำไทย: [
            create_keys_values('ไม่เผ็ด',radio_checkbox_name),
            create_keys_values('เผ็ดน้อย',radio_checkbox_name),
            create_keys_values('เผ็ดปานกลาง',radio_checkbox_name),
            create_keys_values('เผ็ดมาก',radio_checkbox_name),
        ],
        ส้มตำถั่วฝักยาว: [
            create_keys_values('ไม่เผ็ด',radio_checkbox_name),
            create_keys_values('เผ็ดน้อย',radio_checkbox_name),
            create_keys_values('เผ็ดปานกลาง',radio_checkbox_name),
            create_keys_values('เผ็ดมาก',radio_checkbox_name),
        ],
        ส้มตำข้าวโพด: [
            create_keys_values('ไม่เผ็ด',radio_checkbox_name),
            create_keys_values('เผ็ดน้อย',radio_checkbox_name),
            create_keys_values('เผ็ดปานกลาง',radio_checkbox_name),
            create_keys_values('เผ็ดมาก',radio_checkbox_name),
        ],
        ส้มตำซั่ว: [
            create_keys_values('ไม่เผ็ด',radio_checkbox_name),
            create_keys_values('เผ็ดน้อย',radio_checkbox_name),
            create_keys_values('เผ็ดปานกลาง',radio_checkbox_name),
            create_keys_values('เผ็ดมาก',radio_checkbox_name),
        ],
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
    const selectedRadio1  = getSelectedValues('radioGroup_items_egg');  // radio btn item
    const selectedRadio2  = getSelectedValues('radioGroup_items_spicy');  // radio btn item

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
    const transcription_item1 = selectedRadio1.join(', '); // ไข่ๆ
    const transcription_item2 = selectedRadio2.join(', '); // เผ็ดๆ
    const transcription_main = selectedRadio.join(', ');

    // Set the text to be spoken
    utterance.text = 'เราอยากได้ '+transcription_main + 'รายการที่ใส่ คือ: ' + transcription + transcription_item1 + transcription_item2;

    // Speak the text
    speechSynthesis.speak(utterance);
}

function navigateToPageSomtum(somtum_type) {
    createCheckboxes_somtum_add('1 วัตถุใส่ดิบเพิ่ม',somtum_type)
    createCheckboxes_somtum_no('2 รายการที่ไม่ต้องการใส่',somtum_type)
    createCheckboxes_somtum_spicylevel('3 ระดับความเผ็ด',somtum_type)
}

function createRadioButtons_somtum() { // step 2
    const items = Array('ส้มตำปู','ส้มตำไทย','ส้มตำถั่วฝักยาว','ส้มตำข้าวโพด','ส้มตำซั่ว')
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
            
            navigateToPageSomtum(selectedValue)
            // display text
            document.getElementById('content').innerHTML = `เราอยากได้ ${selectedValue}`;
            document.querySelectorAll('input[name="radioGroup_items_spicy"], input[type="checkbox"]').forEach(function(input) {
                input.addEventListener('change', generateContent);
              });

        } else {
            selectedValue = null;
            console.log('No radio button selected.');
        }
    });
    
    return selectedValue;
}

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

createRadioButtons_somtum() // step 1
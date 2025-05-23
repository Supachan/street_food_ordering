function generateContent() {
    const listArray1 = getSelectedValues('radioGroup');
    const listArray2 = getSelectedValues('radioGroup_items');
    const listArray3 = getSelectedValues('checkboxGroup'); 
    const listArray4 = getSelectedValues('checkboxGroup_No'); 

    const displayArea = document.getElementById('sum_content');
    if ((listArray2.length+listArray3.length > 0)){
        displayArea.innerHTML = 'รายการที่ใส่ คือ '; // Clear previous content
        document.querySelectorAll('input[name="radioGroup_items"]:checked').forEach(function(radio) {
            // console.log('radio.value Selected radio button:', radio.value);
            displayArea.innerHTML += radio.value + ', ';
        });
        document.querySelectorAll('input[name="checkboxGroup"]:checked').forEach(function(checkbox) {
            // console.log('checkbox.value Selected radio button:', checkbox.value);
            displayArea.innerHTML += checkbox.value + ', ';
        });
        if (listArray4.length > 0){
            displayArea.innerHTML += 'แต่ ';
            document.querySelectorAll('input[name="checkboxGroup_No"]:checked').forEach(function(checkbox) {
                // console.log('checkbox.value Selected radio button:', checkbox.value);
                displayArea.innerHTML +=  checkbox.value + ', ';
            });
        }
    } else {
        displayArea.innerHTML = 'แต่ ';
        document.querySelectorAll('input[name="checkboxGroup_No"]:checked').forEach(function(checkbox) {
            // console.log('checkbox.value Selected radio button:', checkbox.value);
            displayArea.innerHTML += checkbox.value + ', ';
        });
    }
    
    // displayArea.innerHTML = 'รายการที่ใส่ คือ: '; // Clear previous content
    


    // // Display checked radio buttons
    // document.querySelectorAll('input[name="radioGroup_items"]:checked').forEach(function(radio) {
    //     // console.log('radio.value Selected radio button:', radio.value);
    //     displayArea.innerHTML += radio.value + ', ';
    // });
    
    // // Display checked checkboxes
    // document.querySelectorAll('input[name="checkboxGroup"]:checked').forEach(function(checkbox) {
    //     // console.log('checkbox.value Selected radio button:', checkbox.value);
    //     displayArea.innerHTML += checkbox.value + ', ';
    // });

    // // Display checked checkboxes
    // document.querySelectorAll('input[name="checkboxGroup_No"]:checked').forEach(function(checkbox) {
    //     // console.log('checkbox.value Selected radio button:', checkbox.value);
    //     displayArea.innerHTML += 'แต่ ' + checkbox.value + ', ';
    // });
    
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
    // container.innerHTML = `<h2>${SubMenu}</h2>`;
    // container.appendChild(document.createElement('br'));
    container.innerHTML = '';
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
    accordion1()
}

// SubMenu = ประเภทเนื้อ
function createCheckboxes_meat(SubMenu, option) {
    const container = document.getElementById('checkboxContainer2');
    // container.innerHTML = `<h2>${SubMenu}</h2>`;
    // container.appendChild(document.createElement('br'));
    container.innerHTML = '';
    const radio_checkbox_name = 'checkboxGroup'
    const checkboxData = {
        น้ำใส: [
            create_keys_values('เนื้อหมู',radio_checkbox_name),
            create_keys_values('เนื้อสด',radio_checkbox_name),
            create_keys_values('เนื้อเปื่อย',radio_checkbox_name),
            create_keys_values('เนื้อปลา',radio_checkbox_name),
            // create_keys_values('ปลาหมึก',radio_checkbox_name),
            // create_keys_values('หมูกรอบ',radio_checkbox_name),
        ],
        ต้มยำน้ำใส: [
            create_keys_values('เนื้อหมู',radio_checkbox_name),
            create_keys_values('เนื้อสด',radio_checkbox_name),
            create_keys_values('เนื้อเปื่อย',radio_checkbox_name),
            create_keys_values('เนื้อปลา',radio_checkbox_name),
            create_keys_values('ปลาหมึก',radio_checkbox_name),
            create_keys_values('กุ้ง',radio_checkbox_name),
            create_keys_values('หมูกรอบ',radio_checkbox_name),
        ],
        ต้มยำน้ำข้น: [
            create_keys_values('เนื้อหมู',radio_checkbox_name),
            create_keys_values('เนื้อสด',radio_checkbox_name),
            create_keys_values('เนื้อเปื่อย',radio_checkbox_name),
            create_keys_values('เนื้อปลา',radio_checkbox_name),
            create_keys_values('ปลาหมึก',radio_checkbox_name),
            create_keys_values('กุ้ง',radio_checkbox_name),
            create_keys_values('หมูกรอบ',radio_checkbox_name),
        ],
        น้ำตก: [
            create_keys_values('เนื้อหมู',radio_checkbox_name),
            create_keys_values('เนื้อสด',radio_checkbox_name),
            create_keys_values('เนื้อเปื่อย',radio_checkbox_name),
            create_keys_values('เนื้อปลา',radio_checkbox_name),
            // create_keys_values('ปลาหมึก',radio_checkbox_name),
            // create_keys_values('หมูกรอบ',radio_checkbox_name),
        ],
        เย็นตาโฟ: [
            // create_keys_values('เนื้อหมู',radio_checkbox_name),
            // create_keys_values('เนื้อสด',radio_checkbox_name),
            // create_keys_values('เนื้อเปื่อย',radio_checkbox_name),
            create_keys_values('เนื้อปลา',radio_checkbox_name),
            create_keys_values('ปลาหมึก',radio_checkbox_name),
            create_keys_values('กุ้ง',radio_checkbox_name),
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
    // container.innerHTML = `<h2>${SubMenu}</h2>`;
    // container.appendChild(document.createElement('br'));
    container.innerHTML = '';
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
            // create_keys_values('ลูกชิ้นเนื้อ',radio_checkbox_name),
            // create_keys_values('ลูกชิ้นแคะ',radio_checkbox_name),
            create_keys_values('ลูกชิ้นปลา',radio_checkbox_name),
            create_keys_values('ลูกชิ้นกุ้ง',radio_checkbox_name),
        ],
        ต้มยำน้ำข้น: [
            create_keys_values('ลูกชิ้นหมู',radio_checkbox_name),
            // create_keys_values('ลูกชิ้นเนื้อ',radio_checkbox_name),
            // create_keys_values('ลูกชิ้นแคะ',radio_checkbox_name),
            create_keys_values('ลูกชิ้นปลา',radio_checkbox_name),
            create_keys_values('ลูกชิ้นกุ้ง',radio_checkbox_name),
        ],
        น้ำตก: [
            create_keys_values('ลูกชิ้นหมู',radio_checkbox_name),
            create_keys_values('ลูกชิ้นเนื้อ',radio_checkbox_name),
            // create_keys_values('ลูกชิ้นแคะ',radio_checkbox_name),
            // create_keys_values('ลูกชิ้นปลา',radio_checkbox_name),
            create_keys_values('ลูกชิ้นกุ้ง',radio_checkbox_name),
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
    // container.innerHTML = `<h2>${SubMenu}</h2>`;
    // container.appendChild(document.createElement('br'));
    container.innerHTML = '';
    const radio_checkbox_name = 'checkboxGroup_No'
    const checkboxData = {
        น้ำใส: [
            create_keys_values('ไม่ใส่ถั่วงอก',radio_checkbox_name),
            create_keys_values('ไม่ใส่ผัก',radio_checkbox_name),
            // create_keys_values('เต้าหู้',radio_checkbox_name),
            // create_keys_values('เครื่องใน',radio_checkbox_name),
        ],
        ต้มยำน้ำใส: [
            create_keys_values('ไม่ใส่ถั่วงอก',radio_checkbox_name),
            create_keys_values('ไม่ใส่ผัก',radio_checkbox_name),
            // create_keys_values('เต้าหู้',radio_checkbox_name),
            // create_keys_values('เครื่องใน',radio_checkbox_name),
        ],
        ต้มยำน้ำข้น: [
            create_keys_values('ไม่ใส่ถั่วงอก',radio_checkbox_name),
            create_keys_values('ไม่ใส่ผัก',radio_checkbox_name),
            // create_keys_values('เต้าหู้',radio_checkbox_name),
            // create_keys_values('เครื่องใน',radio_checkbox_name),
        ],
        น้ำตก: [
            create_keys_values('ไม่ใส่ถั่วงอก',radio_checkbox_name),
            create_keys_values('ไม่ใส่ผัก',radio_checkbox_name),
            // create_keys_values('เต้าหู้',radio_checkbox_name),
            create_keys_values('ไม่ใส่เครื่องใน',radio_checkbox_name),        
        ],
        เย็นตาโฟ: [
            create_keys_values('ไม่ใส่ถั่วงอก',radio_checkbox_name),
            create_keys_values('ไม่ใส่ผัก',radio_checkbox_name),
            create_keys_values('ไม่ใส่เต้าหู้',radio_checkbox_name),
            // create_keys_values('ไม่ใส่ลูกชิ้นแคะ',radio_checkbox_name),
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
        const text     = item['id'];
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
    console.log(`Selected values for ${radio_checkbox_name}:`, selectedValues, selectedValues.length);
    return selectedValues;
}

async function playAudio(listArrays, audios, index, progressBar, totalAudios) {
    return new Promise(resolve => {
      const statusDiv = document.getElementById('status');
      statusDiv.innerHTML = `กำลังเล่นเสียง "${listArrays[index]}" ...`; // Update status

      audios[index].play();
      audios[index].addEventListener('ended', () => {
        console.log(`${index} ended`);
        // Update progress bar
        progressBar.value = ((index + 1) / totalAudios) * 100;
        resolve();
      });
    });
  }


let isPlaying = false;
async function text_to_speech() {
    if (isPlaying) return;
    isPlaying = true;

    const listArray1 = getSelectedValues('radioGroup');
    const listArray2 = getSelectedValues('radioGroup_items');
    const listArray3 = getSelectedValues('checkboxGroup'); 
    const listArray4 = getSelectedValues('checkboxGroup_No'); 

    if ((listArray2.length+listArray3.length+listArray4.length === 0)){
        var listArrays = Array.prototype.concat.apply([], ['เราอยากได้',listArray1])
    } else {
        if (listArray2.length+listArray3.length > 0){
            var listArrays = Array.prototype.concat.apply([], ['เราอยากได้',listArray1,'รายการที่ใส่คือ',listArray2,listArray3,'แต่',listArray4])
        } else {
            var listArrays = Array.prototype.concat.apply([], ['เราอยากได้',listArray1,'แต่',listArray4])
        }
        }
    const LEN = listArrays.length;
    console.log('listArrays = ', listArrays, 'LEN =', LEN);

    const audios = [];
    for (let i = 0; i < listArrays.length; i++) {
      const audio = new Audio(`audio_files/${listArrays[i]}.mp3`);
      audios.push(audio);
    }

    const progressBar = document.getElementById('progressBar');
    progressBar.value = 0; // Reset progress bar

    for (let k = 0; k < LEN; k++) {
      await playAudio(listArrays, audios, k, progressBar, LEN);
    }

    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = 'ข้อความเสียงเสร็จสิ้นแล้ว';

    isPlaying = false;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('summaryButton');
    button.addEventListener('click', text_to_speech);
  });

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
    // utterance.text = 'เราอยากได้ ก๋วยเตี๋ยว'+transcription_main + 'รายการที่ใส่ คือ: ' + transcription_item + transcription;

    // Speak the text
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}

function navigateToPageNoodle(noodle_type) {
    createCheckboxes_noodle('1 ประเภทเส้น',noodle_type)
    createCheckboxes_meat('2 ประเภทเนื้อ',noodle_type)
    createCheckboxes_ball('3 ประเภทลูกชิ้น',noodle_type)
    createCheckboxes_no_items_need('4 รายการที่ไม่ต้องการใส่',noodle_type)
    // accordion1()
}

function accordion() {
    document.querySelectorAll('.accordion').forEach(function(accordion) {
        accordion.addEventListener('click', function() {
          this.classList.toggle('active');
          const panel = this.nextElementSibling;
          if (panel.style.display === 'block') {
            panel.style.display = 'none';
          } else {
            panel.style.display = 'block';
          }
        });
      });
}

function accordion1() {
    document.querySelectorAll('.accordion1').forEach(function(accordion) {
        accordion.addEventListener('click', function() {
          this.classList.toggle('active');
          const panel = this.nextElementSibling;
          if (panel.style.display === 'block') {
            panel.style.display = 'none';
          } else {
            panel.style.display = 'block';
          }
        });
      });
}

//  main function
function createRadioButtons_noodles() { // step 2
    const items = Array('น้ำใส','ต้มยำน้ำใส','ต้มยำน้ำข้น','น้ำตก','เย็นตาโฟ')
    const container = document.getElementById('checkboxContainer_items');
    const radio_checkbox_name = 'radioGroup';
    // Clear previous radio buttons
    container.innerHTML = '';

    // Create and append radio buttons
    items.forEach(item=> {
        const kvi      = create_keys_values(item,radio_checkbox_name);
        const text     = kvi['id']
        const imageSrc = kvi['imageSrc']
        const videoSrc = kvi['videoSrc']
        // create three columns in DIV
        const divWithColumns = createDivWithFileColumns_radio_btn(text, imageSrc, videoSrc, radio_checkbox_name);
        container.appendChild(divWithColumns);
    });
    accordion()
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
                if (input.type !== "radio" && input.type !== "checkbox") {
                    console.log("Non-radio and non-checkbox input changed:", input.value);
                } else {
                    input.addEventListener('change', generateContent);
                }
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
            // label.style.backgroundColor = 'red';
            // label.style.color = 'white';
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
            checkbox.id = 'checkboxClass'+data.value;
            checkbox.value = data.value;
            
            const labelText = document.createTextNode(data.value);
            label.classList.add('label-checkbox')
            // label.style.backgroundColor = 'yellow';
            // label.style.color = 'black';
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
//image_input
//btn
//exteacText
//r
let image_input,btn,exteacText;

const extText=()=>{
  let image_input=document.getElementById('image_input');
  let exteacText=document.getElementById('exteacText');
  const imageFile=image_input.files[0];
  if(!imageFile){
    exteacText.textContent='Please select an image file'
    return;
  }
  Tesseract.recognize(
    imageFile,
    'eng'
  ).then(function({data}) {
    exteacText.textContent=data.text;
  }).catch(function(err){
    console.error('Error',err);
  })
}

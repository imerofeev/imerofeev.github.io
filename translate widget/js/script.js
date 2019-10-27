const url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
const keyAPI = "trnsl.1.1.20191027T195830Z.f2e4fdbcbac4230f.e0fb6b9c79face6ce9609f9e10765694223767d7";

document.querySelector('#translate').addEventListener('click', function() {
  const xhr = new XMLHttpRequest();
  const textAPI = document.querySelector('#source').value;
  const langAPI = document.querySelector('#lang').value;
  const data = "key="+keyAPI+"&text="+textAPI+"&lang="+langAPI;
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(data);
  xhr.onreadystatechange = function() {
    if (this.readyState==4 && this.status==200) {
      const res = this.responseText;
      const json = JSON.parse(res);
      if(json.code == 200) {
        document.querySelector('#output').innerHTML = json.text[0];
      }
      else {
        document.querySelector('#output').innerHTML = "Error Code: " + json.code;
      }
    }
  }
}, false);
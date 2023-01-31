(()=>{"use strict";const e=document.querySelector("#location-name"),t=document.querySelector("#submit"),n=document.querySelector("#description"),o=document.querySelector("#location-address"),a=document.querySelector("#humidity"),r=document.querySelector("#temp"),i=document.querySelector("#feels-like"),c=document.querySelector("#wind"),u=document.querySelector("#min-max");e.value="nepal",(()=>{const d=async()=>{if(""===e.value)return alert("enter the name of city"),!1;const t=await async function(e){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=d02ff9591aed8d0a11368b857174ac68`,{mod:"cors"}),n=await t.json();return 200!==n.cod?(alert("No such City or Country!"),!1):n}(e.value);console.log(t),n.textContent=t.weather[0].description,o.textContent=`${t.name}, ${t.sys.country}`,a.textContent=`Humidity: ${t.main.humidity}`,r.textContent=`${Math.round(t.main.temp)}°C`,i.textContent=`Feels Like: ${t.main.feels_like}°C`,c.textContent=`Wind Speed: ${t.wind.speed} Km/hr`,u.textContent=`Temperature(Min/Max): ${t.main.temp_min}°C/${t.main.temp_max}°C`,e.value=""};t.addEventListener("click",(()=>{d()})),e.addEventListener("keydown",(e=>{13===e.keyCode&&d()})),d()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiJtQkFFQSxNQUFNLEVBQVdBLFNBQVNDLGNBQWMsa0JBQ2xDQyxFQUFlRixTQUFTQyxjQUFjLFdBRXRDRSxFQUFjSCxTQUFTQyxjQUFjLGdCQUNyQ0csRUFBWUosU0FBU0MsY0FBYyxxQkFDbkNJLEVBQVdMLFNBQVNDLGNBQWMsYUFDbENLLEVBQU9OLFNBQVNDLGNBQWMsU0FDOUJNLEVBQVlQLFNBQVNDLGNBQWMsZUFDbkNPLEVBQVlSLFNBQVNDLGNBQWMsU0FDbkNRLEVBQVNULFNBQVNDLGNBQWMsWUFDdEMsRUFBU1MsTUFBUSxRQUNPLE1BQ3BCLE1BQU1DLEVBQWNDLFVBQ2hCLEdBQXNCLEtBQW5CLEVBQVNGLE1BRVIsT0FEQUcsTUFBTSwyQkFDQyxFQUVYLE1BQU1DLFFDbEJDRixlQUE4QkcsR0FFekMsTUFBTUMsUUFBaUJDLE1BQU0scURBQXFERix3REFDbEYsQ0FBQ0csSUFBTSxTQUVEQyxRQUFxQkgsRUFBU0ksT0FDcEMsT0FBd0IsTUFBckJELEVBQWFFLEtBQ1pSLE1BQU0sNkJBQ0MsR0FFSk0sQ0FDWCxDRE9rQ0csQ0FBZSxFQUFTWixPQUNsRGEsUUFBUUMsSUFBSVYsR0FFWlgsRUFBWXNCLFlBQWNYLEVBQVlZLFFBQVEsR0FBR3ZCLFlBQ2pEQyxFQUFVcUIsWUFBYyxHQUFHWCxFQUFZYSxTQUFTYixFQUFZYyxJQUFJQyxVQUNoRXhCLEVBQVNvQixZQUFjLGFBQWFYLEVBQVlnQixLQUFLekIsV0FDckRDLEVBQUttQixZQUFjLEdBQUdNLEtBQUtDLE1BQU1sQixFQUFZZ0IsS0FBS3hCLFVBRWxEQyxFQUFVa0IsWUFBYyxlQUFlWCxFQUFZZ0IsS0FBS0csZUFDeER6QixFQUFVaUIsWUFBYyxlQUFlWCxFQUFZb0IsS0FBS0MsY0FDeEQxQixFQUFPZ0IsWUFBYyx5QkFBeUJYLEVBQVlnQixLQUFLTSxjQUFjdEIsRUFBWWdCLEtBQUtPLGFBQzlGLEVBQVMzQixNQUFRLEVBQUUsRUFHdkJSLEVBQWFvQyxpQkFBaUIsU0FBUyxLQUNuQzNCLEdBQWEsSUFHakIsRUFBUzJCLGlCQUFpQixXQUFZQyxJQUNqQixLQUFkQSxFQUFFQyxTQUNEN0IsR0FDSixJQUdKQSxHQUFhLEVFekNqQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9tb2R1bGVzL2dldExvY2F0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvbW9kdWxlcy9mZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0V2VhdGhlckluZm8gZnJvbSBcIi4vZmV0Y2hEYXRhXCI7XHJcblxyXG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb24tbmFtZVwiKTtcclxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XHJcblxyXG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XHJcbmNvbnN0IHBsYWNlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb24tYWRkcmVzc1wiKTtcclxuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h1bWlkaXR5XCIpO1xyXG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wXCIpO1xyXG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzLWxpa2VcIik7XHJcbmNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2luZFwiKTtcclxuY29uc3QgbWluTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaW4tbWF4XCIpO1xyXG5sb2NhdGlvbi52YWx1ZSA9IFwibmVwYWxcIjtcclxuY29uc3Qgd2VhdGhlckZ1bmN0aW9uID0gKCk9PntcclxuICAgIGNvbnN0IHdlYXRoZXJJbmZvID0gYXN5bmMgKCk9PntcclxuICAgICAgICBpZihsb2NhdGlvbi52YWx1ZSA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiZW50ZXIgdGhlIG5hbWUgb2YgY2l0eVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJJbmZvKGxvY2F0aW9uLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XHJcblxyXG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICBwbGFjZU5hbWUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5uYW1lfSwgJHt3ZWF0aGVyRGF0YS5zeXMuY291bnRyeX1gO1xyXG4gICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke3dlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHl9YDtcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApfcKwQ2A7XHJcblxyXG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke3dlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZX3CsENgO1xyXG4gICAgICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke3dlYXRoZXJEYXRhLndpbmQuc3BlZWR9IEttL2hyYDtcclxuICAgICAgICBtaW5NYXgudGV4dENvbnRlbnQgPSBgVGVtcGVyYXR1cmUoTWluL01heCk6ICR7d2VhdGhlckRhdGEubWFpbi50ZW1wX21pbn3CsEMvJHt3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4fcKwQ2BcclxuICAgICAgICBsb2NhdGlvbi52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICB3ZWF0aGVySW5mbygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9jYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpPT57XHJcbiAgICAgICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XHJcbiAgICAgICAgICAgIHdlYXRoZXJJbmZvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICB3ZWF0aGVySW5mbygpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyRnVuY3Rpb247IiwiLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckluZm8obG9jYXRpb24pe1xyXG4gICAgXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JnVuaXRzPW1ldHJpYyZhcHBpZD1kMDJmZjk1OTFhZWQ4ZDBhMTEzNjhiODU3MTc0YWM2OGAsXHJcbiAgICB7bW9kIDogXCJjb3JzXCJ9XHJcbiAgICApXHJcbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBpZihsb2NhdGlvbkRhdGEuY29kICE9PSAyMDApe1xyXG4gICAgICAgIGFsZXJ0KFwiTm8gc3VjaCBDaXR5IG9yIENvdW50cnkhXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBsb2NhdGlvbkRhdGE7XHJcbn1cclxuIiwiaW1wb3J0IHdlYXRoZXJGdW5jdGlvbiBmcm9tIFwiLi9tb2R1bGVzL2dldExvY2F0aW9uXCI7XHJcblxyXG53ZWF0aGVyRnVuY3Rpb24oKTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3VibWl0QnV0dG9uIiwiZGVzY3JpcHRpb24iLCJwbGFjZU5hbWUiLCJodW1pZGl0eSIsInRlbXAiLCJmZWVsc0xpa2UiLCJ3aW5kU3BlZWQiLCJtaW5NYXgiLCJ2YWx1ZSIsIndlYXRoZXJJbmZvIiwiYXN5bmMiLCJhbGVydCIsIndlYXRoZXJEYXRhIiwibG9jYXRpb24iLCJyZXNwb25zZSIsImZldGNoIiwibW9kIiwibG9jYXRpb25EYXRhIiwianNvbiIsImNvZCIsImdldFdlYXRoZXJJbmZvIiwiY29uc29sZSIsImxvZyIsInRleHRDb250ZW50Iiwid2VhdGhlciIsIm5hbWUiLCJzeXMiLCJjb3VudHJ5IiwibWFpbiIsIk1hdGgiLCJyb3VuZCIsImZlZWxzX2xpa2UiLCJ3aW5kIiwic3BlZWQiLCJ0ZW1wX21pbiIsInRlbXBfbWF4IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==
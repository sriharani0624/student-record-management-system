let students=[
{reg:"25UGAM053",name:"Sriharani M",dept:"B.Sc AIML",year:"2nd Year",phone:"—"},
{reg:"25UGAM054",name:"Ananya S",dept:"B.Sc AIML",year:"2nd Year",phone:"9876543210"},
{reg:"25UGAM055",name:"Kavin R",dept:"B.Sc Computer Science",year:"2nd Year",phone:"9876501234"},
{reg:"25UGAM056",name:"Harini P",dept:"BCA",year:"2nd Year",phone:"9876512345"},
{reg:"25UGAM057",name:"Rahul K",dept:"B.Sc AIML",year:"2nd Year",phone:"9876523456"}];
function render(){let q=document.getElementById('search').value.toLowerCase(),d=document.getElementById('dept').value;let list=students.filter(s=>(!q||Object.values(s).join(' ').toLowerCase().includes(q))&&(!d||s.dept===d));document.getElementById('studentCount').textContent=list.length;document.getElementById('tbody').innerHTML=list.map(s=>'<tr><td><b>'+s.reg+'</b></td><td>'+s.name+'</td><td>'+s.dept+'</td><td>'+s.year+'</td><td>'+s.phone+'</td><td><button class="action" onclick="removeStudent('+students.indexOf(s)+')">Delete</button></td></tr>').join('')||'<tr><td colspan="6">No records found.</td></tr>'}
function openModal(){document.getElementById('modal').classList.add('show')}function closeModal(){document.getElementById('modal').classList.remove('show')}
function addStudent(e){e.preventDefault();students.push({reg:document.getElementById('reg').value,name:document.getElementById('name').value,dept:document.getElementById('d').value,year:document.getElementById('year').value,phone:document.getElementById('phone').value||"—"});e.target.reset();closeModal();render()}
function removeStudent(i){if(confirm("Delete this student record?")){students.splice(i,1);render()}}
render();
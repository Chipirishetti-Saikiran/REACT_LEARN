//Text 
const [text, setText] = useState("");
<input type="text" value={text} onChange={(e) => setText(e.target.value)} />;


//Checkbox:
const [checked, setChecked] = useState(false);
<input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />;


//Radio
const [gender, setGender] = useState("");
<input type="radio" value="Male" checked={gender==="Male"} onChange={(e)=>setGender(e.target.value)} /> 
<input type="radio" value="Female" checked={gender==="Female"} onChange={(e)=>setGender(e.target.value)} /> 


//Dropdown:

const [country, setCountry] = useState("");
<select value={country} onChange={(e) => setCountry(e.target.value)}>
  <option value="">Choose Country</option>
  <option value="India">India</option>
  <option value="USA">USA</option>
</select>

import { Field, Form, Formik } from 'formik'
import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';




const initialValues={
    ddate:"",
    dmonth:"",
    dyear:"",
    tdate:new Date().getDate(),
    tmonth:new Date().getMonth()+1,
    tyear:new Date().getFullYear(),


}




function AgeCalci() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   
   
 let i=0;
 let year=[]
 while(i<=100){
 year=[...year,new Date().getFullYear()-i]
     i++;
 }

const [result,setResult]=React.useState([])

 const calculate = ({ddate,dmonth,dyear,tdate,tmonth,tyear}) => {
    let _ddate = parseInt(ddate)
    let _dmonth = parseInt(dmonth)
    let _dyear = parseInt(dyear)
   let _tdate = parseInt(tdate)
    let _tmonth = parseInt(tmonth)
    let _tyear = parseInt(tyear)
    
    var month1 = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    if(result.length>0){
        result.pop()
        result.pop()
        result.pop()
    }
    if (_ddate > _tdate) {
        _tdate = _tdate + month1[_tmonth - 1];
         _tmonth = _tmonth  - 1;
         console.log('tdate ' ,_tdate,' tmonth', _tmonth)
      }
      if (_dmonth > _tmonth) {
         _tyear = _tyear - 1;
         _tmonth = _tmonth + 12;
      }
      var rdate = _tdate - _ddate;
      var rmonth = _tmonth - _dmonth;
      var ryear = _tyear - _dyear;
      
      setResult([...result,rdate,rmonth,ryear])
      
}
   
    return (
        <div>
            <Box sx={{ border: 3 , borderColor: 'error.main',width: 800,
        height: 300,mx: "auto",mt: "5rem",bgcolor: 'primary.light'}} size="medium">
            <h3> Calculate Age</h3>
            <Formik initialValues={initialValues} onSubmit={calculate}>
                <Form>
                    <div id="DOB">
                <p>enter date of birth</p>
                <Field id="ddate" name="ddate" list="_ddate" component={TextField} size="small" placeholder="Date" size="4"  style={{margin:"10px"}} variant="standard"/>
                <datalist id="_ddate">
                
                {[...Array(31).keys()].map((index)=> {return <option value={index+1} key={index}> {index+1}</option>})}
                </datalist>

                 <Field id="dmonth" component={TextField} variant="standard" name="dmonth" list="_dmonth" placeholder="Month" size="4" style={{margin:"10px"}}/>
                 <datalist id="_dmonth">
                 {months.map((month,index)=>{
                     return <option value={index+1} key={index+1}>{month}</option>
                 })}
                 </datalist>

                <Field id="dyear" component={TextField} variant="standard" name="dyear" list="_dyear" placeholder="Year" size="4" style={{margin:"10px"}}/>
                <datalist id="_dyear">
               {year.map((y) => {
                   return <option value={y} key={y}>{y}</option>
               })}
                </datalist>

                </div>

                <div id="DOC">
                <p>enter date </p>
                <Field id="tdate" component={TextField} variant="standard" name="tdate" list="_tdate" placeholder="Date"  size="4" style={{margin:"10px"}}/>
                <datalist id="_tdate">
                
                {[...Array(31).keys()].map((index)=> {return <option value={index+1} key={index}> {index+1}</option>})}
                </datalist>

                 <Field id="tmonth" component={TextField} variant="standard" name="tmonth" list="_tmonth" placeholder="Month" size="4" style={{margin:"10px"}}/>
                 <datalist id="_tmonth" >
                 {months.map((month,index)=>{
                     return <option value={index+1} key={index+1}>{month}</option>
                 })}
                 </datalist>

                <Field id="tyear" component={TextField} variant="standard" name="tyear" list="_tyear" placeholder="Year" size="4" style={{margin:"10px"}}/>
                <datalist id="_tyear" >
               {year.map((y) => {
                   return <option value={y} key={y}>{y}</option>
               })}
                </datalist>

                </div>
               
               <br/>
                <Button type="submit" variant="contained" color="success">calculate</Button>
               {result.length>0?<p>{`Age is ${result[2]} years ${result[1]} months ${result[0]} days`}</p>:null}
               
                </Form>
            </Formik>
            </Box>
        </div>
    )
}

export default AgeCalci

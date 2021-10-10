import React from 'react'
import { Field, Form, Formik, } from 'formik'
import * as Yup from 'yup'



const initialValues={
    ddate:"",
    dmonth:"",
    dyear:"",
    tdate:new Date().getDate(),
    tmonth:new Date().getMonth()+1,
    tyear:new Date().getFullYear(),


}

const validationSchema=Yup.object({
    ddate:Yup.string().required('Date is Required'),
dmonth:Yup.string().required('Month is Required'),
dyear:Yup.string().required('Year is Required'),
tdate:Yup.string().required('Date is Required'),
tmonth:Yup.string().required('Month is Required'),
tyear:Yup.string().required('Year is Required'),
})

function AgeCalculator() {

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
        <div className="container container-fluid border border-danger mt-5 w-50 bg-info" >
     
        <h3> Calculate Age</h3>
        <Formik initialValues={initialValues} onSubmit={calculate} validationSchema={validationSchema}>
           
                <Form > 
                
                <div id="DOB" className="mt-4">

            <h5>enter date of birth</h5>
            
            <Field id="ddate" name="ddate" form-control list="_ddate"  className="text-center bg-info text-white fs-5 border border-top-0 border-end-0 border-start-0 " placeholder="Date" size="8"   style={{margin:"10px"}} />
            <datalist id="_ddate">
            
            {[...Array(31).keys()].map((index)=> {return <option value={index+1} key={index}> {index+1}</option>})}
            </datalist>

             <Field id="dmonth"   name="dmonth" list="_dmonth" placeholder="Month" className="text-center bg-info text-white fs-5 border border-top-0 border-end-0 border-start-0 " size="8"  style={{margin:"10px"}}/>
             <datalist id="_dmonth">
             {months.map((month,index)=>{
                 return <option value={index+1} key={index+1}>{month}</option>
             })}
             </datalist>

            <Field id="dyear"   name="dyear" list="_dyear" placeholder="Year" className="text-center bg-info text-white fs-5 border border-top-0 border-end-0 border-start-0 " size="8"  style={{margin:"10px"}}/>
            <datalist id="_dyear">
           {year.map((y) => {
               return <option value={y} key={y}>{y}</option>
           })}
            </datalist>

            </div>

            <div id="DOC" className="mt-4">
            <h5>enter date </h5>
            <Field id="tdate"   name="tdate" list="_tdate" placeholder="Date" className="text-center bg-info text-white fs-5 border border-top-0 border-end-0 border-start-0 "  size="8"  style={{margin:"10px"}}/>
            <datalist id="_tdate">
            
            {[...Array(31).keys()].map((index)=> {return <option value={index+1} key={index}> {index+1}</option>})}
            </datalist>

             <Field id="tmonth"   name="tmonth" list="_tmonth" placeholder="Month" className="text-center bg-info text-white fs-5 border border-top-0 border-end-0 border-start-0 " size="8"  style={{margin:"10px"}}/>
             <datalist id="_tmonth" >
             {months.map((month,index)=>{
                 return <option value={index+1} key={index+1}>{month}</option>
             })}
             </datalist>

            <Field id="tyear"   name="tyear" list="_tyear" placeholder="Year" className="text-center bg-info text-white fs-5 border border-top-0 border-end-0 border-start-0 " size="8"  style={{margin:"10px"}}/>
            <datalist id="_tyear" >
           {year.map((y) => {
               return <option value={y} key={y}>{y}</option>
           })}
            </datalist>

            </div>
           
           <br/>
            <button type="submit"  class="btn btn-success mb-3">calculate</button>
           {result.length>0?<h3 className="text-danger text-bold">{`Age is ${result[2]} years ${result[1]} months ${result[0]} days`}</h3>:null}

                    

                  
               
            </Form>
   
        </Formik>
        
      
    </div>

    )
}

export default AgeCalculator

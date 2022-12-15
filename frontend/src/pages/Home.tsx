import axios, { AxiosResponse } from 'axios'
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { invContext } from '../invContext'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { parseInvoice, handleClick } from '../features/info/infoSlice'
type Props = {}

const Home = (props: Props) => {
  // const context = useContext(invContext)
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const newState = useAppSelector(state=>state)
  console.log(newState)
  const [file, setFile] = useState<any>(null)


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    dispatch(parseInvoice(formData));
    navigate('/results');
  }

  return (
    <div><input type="file" name='invoice' id="file" onChange={(e) => {
        if(!e.target.files) return
        else {
          setFile(e.target.files?.[0])}}}/>
        
        
      <input type="submit" onClick={(handleSubmit)}/>
        <h1>Hello</h1></div>
  )
}

export default Home
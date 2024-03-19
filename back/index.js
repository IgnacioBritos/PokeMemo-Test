const express = require('express')

const port = 3000

const server = require('./app')

server.listen(port,()=>{
    console.log(`server listening on port: ${port}`)
})
'use strict';
const path = require('path');

module.exports ={
  async index(req,res){
    try {
      const index = path.resolve(__dirname, '..', 'public', 'index.html');

      return res.sendFile(index);
    }catch(e) {
      return res.status(500).json({message: e.message}) 
    }
  },

  async create(req,res){
    let{data} = req.body;
    try {
      return res.json('ok')
    }catch(e) {
      return res.status(500).json({message: e.message}) 
    }
  },

  async update(req,res){
    let{id} = req.params;
    let{data} = req.body;
    try {
      return res.json('ok')
    }catch(e) {
      return res.status(500).json({message: e.message}) 
    }
  },

  async delete(req,res){
    let{id} = req.params;
    try {
      return res.json('ok')
    }catch(e) {
      return res.status(500).json({message: e.message}) 
    }
  },


}
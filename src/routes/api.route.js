var express = require('express')
var router = express.Router()

const uploadControllers = require('../app/controllers/upload.controllers')
const deleteControllers = require('../app/controllers/delete.controllers')
const publicControllers = require('../app/controllers/public.controllers')
const createFolderControllers = require('../app/controllers/create_folder.controllers')

router.post('/upload', uploadControllers.upload)

router.post('/delete', deleteControllers.delete)

router.post('/public', publicControllers.public)

router.post('/create-folder', createFolderControllers.createFolder)

module.exports = router
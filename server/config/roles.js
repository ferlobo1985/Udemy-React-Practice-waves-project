const AccessControl = require('accesscontrol');


let grantsObject = {
    admin:{
        dog:{
            'create:any':['*'],
            'read:any':['*'],
            'update:any':['*'],
            'delete:any':['*'],
        }
    },
    user:{
        dog: {
            'read:any':['*'],
        }
    }
}

const roles = new AccessControl(grantsObject)

module.exports = { roles }
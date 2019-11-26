const http = require('./http')

const getModelFrom = (entity) => {
    if (entity == 'battery') {
        return 'batteries'
    }
    else if (entity == 'column ') {
        return 'columns'
    }
    else if (entity == 'elevator') {
        return 'elevators'
    }
    else if (entity == 'intervention') {
        return 'interventions'
    }
}

module.exports = async (entity, id, property) => {
    let model = getModelFrom(entity);
    let element = await http('get', `/api`, `${model}/${id}`)
    return element[property]
}
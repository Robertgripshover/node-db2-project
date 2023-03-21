

//IMPORTANT TO REMEMBER THAT
//ANYTIME YOU CHANGE THE INFORMATION IN HERE
//YOU NEED TO RUN 'npm run seed'

const cars = [
    {
        vin:  'YS3FB49S741008010',
        make: 'toyota',
        model: 'tacoma',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin:  'JH4DA3450KS009535',
        make: 'audi',
        model: 'a6',
        mileage: 100000,
        title: 'clean',
        transmission: 'automatic',
    },
    {
        vin:  'JNKCV51E03M018631',
        make: 'infiniti',
        model: 'g35',
        mileage: 117000,
        title: 'clean',
        // becuase there is no trans type,
        // the db would just make this null
        // becuase it is not required.
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
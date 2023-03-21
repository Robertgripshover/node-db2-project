// STRETCH

const cars = [
    {
        vin:  '1111111111111',
        make: 'toyota',
        model: 'tacoma',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin:  '1111111111111',
        make: 'audi',
        model: 'a6',
        mileage: 100000,
        title: 'clean',
        transmission: 'automatic',
    },
    {
        vin:  '1111111111111',
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
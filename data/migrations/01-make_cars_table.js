



exports.up = function (knex) {
  return knex.schema.createTable('cars', table => {
    table.increaments()
    //this means this table will automatically increment, 
    //and it is not given much more becuase the readme
    //said that the db will be providing the id
    table.string('vin', 13).notNullable().unique()
    //this can't be null and must be unique
    //this is going to be a string that is in a coulmn
    //called vin that is 13 charaters long
    table.string('make', 128).notNullable()

    table.string('model', 128).notNullable()

    table.numeric('mileage').notNullable()
    //this is a number so we are using numeric

    table.string('title', 128)
    //this is not required hence the lack of .notNullable()

    table.string('transmission', 128)
    //this is not required hence the lack of .notNullable()

  }) //we create the colums we want inside of this
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};

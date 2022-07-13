const faker = require('faker');
// import { faker } from 'faker';
// Module is used to generate random data for tests. Faker library can be used on its own, without this module.

faker.locale = 'en_CA';

export default class Random {
    constructor () {
        (this as any).word = faker.lorem.words();
        (this as any).avatar = faker.image.avatar();
        (this as any).dept = faker.commerce.department();
        (this as any).sentence = faker.lorem.sentence();
        (this as any).name = faker.name.findName();
        (this as any).email = faker.internet.email();
        (this as any).website = faker.internet.url();
        (this as any).address = faker.address.streetAddress();
        (this as any).bio = faker.lorem.sentences();
        (this as any).image = faker.image.avatar();
        (this as any).job = faker.name.jobTitle();
        (this as any).randomWeight = faker.datatype.number({ min: 15, max: 140 });
        (this as any).randomHeight = faker.datatype.number({ min: 115, max: 200 });
        (this as any).jobDescription = faker.name.jobDescriptor();
        (this as any).randomFirstName = faker.name.firstName();
        (this as any).randomLastName = faker.name.lastName();
        (this as any).randomProdAdjective = faker.commerce.productAdjective();
        (this as any).randomProdMaterial = faker.commerce.productMaterial();
        (this as any).randomCompany = faker.company.companyName();
        (this as any).randomDept = faker.commerce.department();
        (this as any).randomDatePast = faker.date.past();
        (this as any).randomDateFuture = faker.date.future();
        (this as any).randomDateRecent = faker.date.recent();
        (this as any).randomDateBetween = faker.date.between();
        (this as any).randomDateMonth = faker.date.month();
        (this as any).randomDateWeekday = faker.date.weekday();
        (this as any).randomPrice = faker.finance.amount();
        (this as any).randomProd = faker.commerce.product();
        (this as any).randomCity = faker.address.city();
        (this as any).randomCountry = faker.address.country();
        (this as any).randomZip = faker.address.zipCode();
        (this as any).randomPerson =
    faker.name.firstName() + ' ' + faker.name.lastName();
        (this as any).randomNr = faker.datatype.number();
        (this as any).randomDirection = faker.address.cardinalDirection();
        (this as any).randomPhone = faker.phone.phoneNumber();
        (this as any).randEmail = faker.internet.email();
        (this as any).password = '123456';
        (this as any).randomText = faker.lorem.words();
        (this as any).randomImage = faker.image.avatar('400', '400', 'people');
        (this as any).randomImgUrl = faker.image.imageUrl();
        (this as any).randomCard = faker.helpers.createCard();
        (this as any).randomUri = faker.image.dataUri();
        (this as any).randomNumber = faker.datatype.number({
    min: 100000000,
    max: 999999999,
});
        (this as any).randomImageUrl = faker.internet.url();
        (this as any).blurb = faker.lorem.paragraphs();
        (this as any).randomUserName = faker.internet.userName();
        (this as any).randomStreetAddress = faker.address.streetAddress(true);
        (this as any).randomDay = faker.datatype.number({ max: 29 });
        (this as any).randomYear = faker.datatype.number({ min: 1915, max: 2021 });
    }
}

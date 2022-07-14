// import * as faker from 'faker';

const faker = require('faker');
// Module is used to generate random data for tests. Faker library can be used on its own, without this module.

faker.locale = 'en_CA';

export default class Random {
    word: string;
    avatar: string;
    dept: string;
    sentence: string;
    name: string;
    email: string;
    website: string;
    address: string;
    bio: string;
    image: string;
    job: string;
    randomWeight: string;
    randomHeight: string;
    jobDescription: string;
    randomFirstName: string;
    randomLastName: string;
    randomProdAdjective: string;
    randomProdMaterial: string;
    randomCompany: string;
    randomDept: string;
    randomDatePast: string;
    randomDateFuture: string;
    randomDateRecent: string;
    randomDateBetween: string;
    randomDateMonth: string;
    randomDateWeekday: string;
    randomPrice: string;
    randomProd: string;
    randomCity: string;
    randomCountry: string;
    randomZip:string;
    randomPerson: string;
    randomNr: string;
    randomDirection: string;
    randomPhone: string;
    randEmail: string;
    password: string;
    randomText: string;
    randomImage: string;
    randomImgUrl: string;
    randomCard: string;
    randomUri: string;
    randomNumber:string;
    randomImageUrl: string;
    blurb: string;
    randomUserName: string;
    randomStreetAddress: string;
    randomDay: string;
    randomYear: string;


    constructor () {
        this.word = faker.lorem.words();
        this.avatar = faker.image.avatar();
        this.dept = faker.commerce.department();
        this.sentence = faker.lorem.sentence();
        this.name = faker.name.findName();
        this.email = faker.internet.email();
        this.website = faker.internet.url();
        this.address = faker.address.streetAddress();
        this.bio = faker.lorem.sentences();
        this.image = faker.image.avatar();
        this.job = faker.name.jobTitle();
        this.randomWeight = faker.datatype.number({ min: 15, max: 140 });
        this.randomHeight = faker.datatype.number({ min: 115, max: 200 });
        this.jobDescription = faker.name.jobDescriptor();
        this.randomFirstName = faker.name.firstName();
        this.randomLastName = faker.name.lastName();
        this.randomProdAdjective = faker.commerce.productAdjective();
        this.randomProdMaterial = faker.commerce.productMaterial();
        this.randomCompany = faker.company.companyName();
        this.randomDept = faker.commerce.department();
        this.randomDatePast = faker.date.past();
        this.randomDateFuture = faker.date.future();
        this.randomDateRecent = faker.date.recent();
        this.randomDateBetween = faker.date.between();
        this.randomDateMonth = faker.date.month();
        this.randomDateWeekday = faker.date.weekday();
        this.randomPrice = faker.finance.amount();
        this.randomProd = faker.commerce.product();
        this.randomCity = faker.address.city();
        this.randomCountry = faker.address.country();
        this.randomZip = faker.address.zipCode();
        this.randomPerson = faker.name.firstName() + ' ' + faker.name.lastName();
        this.randomNr = faker.datatype.number();
        this.randomDirection = faker.address.cardinalDirection();
        this.randomPhone = faker.phone.phoneNumber();
        this.randEmail = faker.internet.email();
        this.password = '123456';
        this.randomText = faker.lorem.words();
        this.randomImage = faker.image.avatar('400', '400', 'people');
        this.randomImgUrl = faker.image.imageUrl();
        this.randomCard = faker.helpers.createCard();
        this.randomUri = faker.image.dataUri();
        this.randomNumber = faker.datatype.number({
            min: 100000000,
            max: 999999999,
        });
        this.randomImageUrl = faker.internet.url();
        this.blurb = faker.lorem.paragraphs();
        this.randomUserName = faker.internet.userName();
        this.randomStreetAddress = faker.address.streetAddress(true);
        this.randomDay = faker.datatype.number({ max: 29 });
        this.randomYear = faker.datatype.number({ min: 1915, max: 2021 });
    }
}

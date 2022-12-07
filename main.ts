import {LoverManage} from "./loverManage";
import {Lover} from "./lover";

let readlineSync = require('readline-sync');
let loverManage = new LoverManage()
let lover = new Lover('pham phuong thuy', 'Aries', 'Kien Xuong - Thai Binh', 2000, 'Hiển thị lần lượt 5 người yêu trong màn hình console, nếu không có người yêu nào')
let lover1 = new Lover('pham phuong thuy', 'Aries', 'Kien Xuong - Thai Binh', 2000, 'Hiển thị lần lượt 5 người yêu trong màn hình console, nếu không có người yêu nào')
let lover2 = new Lover('pham phuong thuy', 'Aries', 'Kien Xuong - Thai Binh', 2000, 'Hiển thị lần lượt 5 người yêu trong màn hình console, nếu không có người yêu nào')
let lover3 = new Lover('pham phuong thuy', 'Aries', 'Kien Xuong - Thai Binh', 2000, 'Hiển thị lần lượt 5 người yêu trong màn hình console, nếu không có người yêu nào')
let lover4 = new Lover('pham phuong thuy', 'Aries', 'Kien Xuong - Thai Binh', 2000, 'Hiển thị lần lượt 5 người yêu trong màn hình console, nếu không có người yêu nào')
loverManage.add(lover)
loverManage.add(lover1)
loverManage.add(lover2)
loverManage.add(lover3)
loverManage.add(lover4)

function main() {
    let menu = `---------Menu chính-----------
    1.Hien Thi Danh Sach Nguoi Yeu
    2.Them Moi Nguoi Yeu
    3.Tim Nguoi Yeu Theo Ten
    4.Xoa Nguoi Yeu
    5.Sua Nguoi Yeu
    0.Thoát chương trình`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                display()
                break;
            case 2:
                add()
                break;
            case 3:
                searchByName()
                break;
            case 4:
                remove();
                break;
            case 5:
                edit();
                break;
        }
    } while (choice !== 0);
}

main();

function add() {
    let name = readlineSync.question('Enter name :  ');
    let zodiac = `---------Cung Hoang Dao-----------
    1.Aries 
    2.Taurus
    3.Gemini
    4.Cancer
    5.Leo
    6.Virgo
    7.Libra
    8.Scorpius  
    9.Capricorn
    10.Aquarius
    11.Pisces
    12.Sagittarius 
    `
    console.log(zodiac)
    let choice = +readlineSync.question('Enter Choice : ');
    if (choice === 1) {
        zodiac = 'Aries'
    } else if (choice === 2) {
        zodiac = 'Taurus'
    } else if (choice === 3) {
        zodiac = 'Gemini'
    } else if (choice === 4) {
        zodiac = 'Cancer'
    } else if (choice === 5) {
        zodiac = 'Leo'
    } else if (choice === 6) {
        zodiac = 'Virgo'
    } else if (choice === 7) {
        zodiac = 'Libra'
    } else if (choice === 8) {
        zodiac = 'Scorpius'
    } else if (choice === 9) {
        zodiac = 'Capricorn'
    } else if (choice === 10) {
        zodiac = 'Aquarius'
    } else if (choice === 11) {
        zodiac = 'Pisces'
    } else if (choice === 12) {
        zodiac = 'Sagittarius'
    }
    let homeTown = readlineSync.question('Enter homeTown :  ');
    let yearOfBirth = +readlineSync.question('Enter yearOfBirth :  ');
    let interests = readlineSync.question('Enter interests :  ');
    let a = new Lover(name, zodiac, homeTown, yearOfBirth, interests)
    loverManage.checkAdd(a)

}

function display() {
    console.log(loverManage.displayAll())
}

function edit() {

    let id = +readlineSync.question('Enter id :  ');
    console.log(`--------- Sua Thong Tin --------------`)
    let name = readlineSync.question('Enter name :  ');
    let zodiac1 = `---------Chon Cung Hoang Dao-----------
    1.Aries 
    2.Taurus
    3.Gemini
    4.Cancer
    5.Leo
    6.Virgo
    7.Libra
    8.Scorpius  
    9.Capricorn
    10.Aquarius
    11.Pisces
    12.Sagittarius 
    `
    console.log(zodiac1)
    let choice = +readlineSync.question('Enter Choice : ');
    if (choice === 1) {
        zodiac1 = 'Aries'
    } else if (choice === 2) {
        zodiac1 = 'Taurus'
    } else if (choice === 3) {
        zodiac1 = 'Gemini'
    } else if (choice === 4) {
        zodiac1 = 'Cancer'
    } else if (choice === 5) {
        zodiac1 = 'Leo'
    } else if (choice === 6) {
        zodiac1 = 'Virgo'
    } else if (choice === 7) {
        zodiac1 = 'Libra'
    } else if (choice === 8) {
        zodiac1 = 'Scorpius'
    } else if (choice === 9) {
        zodiac1 = 'Capricorn'
    } else if (choice === 10) {
        zodiac1 = 'Aquarius'
    } else if (choice === 11) {
        zodiac1 = 'Pisces'
    } else if (choice === 12) {
        zodiac1 = 'Sagittarius'
    }
    let homeTown = readlineSync.question('Enter homeTown :  ');
    let yearOfBirth = +readlineSync.question('Enter yearOfBirth :  ');
    let interests = readlineSync.question('Enter interests :  ');
    let a = new Lover(name, zodiac1, homeTown, yearOfBirth, interests)
    loverManage.edit(id, a)
}

function searchByName() {
    let name = readlineSync.question('Enter name :  ');
    console.log(loverManage.searchByName(name))
}

function remove() {
    let id = +readlineSync.question('Enter id :  ');
    loverManage.remove(id)
}
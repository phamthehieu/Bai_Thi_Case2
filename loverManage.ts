import {Lover} from "./lover";

export class LoverManage {
    listLover: Lover[] = []

    add(t: Lover) {
        this.listLover.push(t)
    }

    displayAll() {
        if (this.listLover.length === 0) {
            console.log(`Không có dữ liệu`)
        } else return this.listLover

    }

    searchByName(name: string) {
        return this.listLover.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()))
    }

    edit(id: number, t: Lover) {
        let index = this.findById(id)
        if (index === -1) {
            console.log(`Không tồn  tại  người yêu cần  update`)
        } else {
            this.listLover[index] = t
            console.log(`Sua Thong Tin Thanh Cong`)
        }
    }

    remove(id: number) {
        let index = this.findById(id)
        if (index === -1) {
            console.log(`Không tồn tại  người yêu cần  xoá`)
        } else {
            this.listLover.splice(index,1)
            console.log(`Xoa Thanh Cong`)
        }
    }

    checkAdd(t: Lover) {
        let flag;
        if (this.listLover.length === 0) {
            this.add(t);
            console.log('Success!')
        } else {
            for (let i = 0; i < this.listLover.length; i++) {
                flag = 0
                if (t.name.length > 20) {
                    console.log(`Ten dai qua`)
                    flag = 1
                }
                if (t.homeTown.length > 20) {
                    console.log(`Dai qua`)
                    flag = 1
                }
                if (t.yearOfBirth < 0) {
                    console.log(`Khong Dung Nam Tuoi`)
                    flag = 1
                }
                if (t.interests.length < 20) {
                    console.log(`Ngan qua`)
                    flag = 1
                }
                if (flag === 1) {
                    break;
                }
            }
            if (flag === 0) {
                this.add(t)
                console.log(`Them Nguoi Yeu Thanh Cong`)
            }
        }

    }
    findById(id: number) {
        for (let i = 0; i < this.listLover.length; i++) {
            if (id == this.listLover[i].id) {
                return i;
            }
        }
        return  -1;
    }
}
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {
  const menu_list = ref([
    {
      name: 'ข้าวไก่กระเทียม',
      description: 'ข้าวไก่กระเทียมหอมกรุ่นจากกระทะทำสดใหม่ทุกกล่อง',
      img: 'https://shorturl.asia/xwuVr',
      price: 50,
      rating: 9
    },
    {
      name: 'ข้าวหมูทอด',
      description:
        'ข้าวหมูทอดที่น่าดึงดูดใจด้วยความหอมและสีสันน่ารับประทาน เพราะร้านเราใส่ใจทุกกระบวนการในการทำ และใส่ใจทุกกล่อง',
      img: 'https://shorturl.asia/HvaDm',
      price: 40,
      rating: 5
    },
    {
      name: 'ข้าวขาหมู',
      description:
        'ข้าวขาหมูเนื้อนุ่มที่ตุ๋นมาอย่างเข้าเนื้อ ละลายในปาก พร้อมเสริฟคุณเพียงแค่คุณสั่งซื้อ',
      img: 'https://shorturl.asia/CuFg5',
      price: 45,
      rating: 3
    },
    {
      name: 'ข้าวไก่ทอด',
      description:
        'ข้าวไก่ทอดร้อนๆสไตร์ญี่ปุ่นที่เรานำเข้าซอสและข้าวมาจากประเทศญี่ปุ่นเพื่อมอบความพิเศษนี้ให้คุณ',
      img: 'https://shorturl.asia/DbWwF',
      price: 55,
      rating: 4
    },
    {
      name: 'แกงกะหรี่',
      description:
        'ข้าวแกงกะหรี่ที่เผ็ดร้อนสไตร์ญี่ปุ่นพร้อมทำให้คุณน้ำตาไหล เครื่องแกงที่นำเข้ารวมไปถึงข้าวที่เราพร้อมเสริฟให้คุณ',
      img: 'https://shorturl.asia/RGB7h',
      price: 99,
      rating: 5
    },
    {
      name: 'มาม่า',
      description:
        'มาม่า ถึงแม้จะเป็นอาหารสำหรับเวลาสิ้นเดือนแต่มาม่าของร้านเรานั้นเปี่ยมไปด้วยสารอาหารและความอร่อนจากความใส่ใจของแม่ครัวและความมุ่งมั่นในกาทำให้คุณอิ่มอร่อยและอิ่มท้องด้วยราคาย่อมเยาว์พร้อมกับความเอร็ดอร่อย',
      img: 'https://shorturl.asia/3tXFm',
      price: 60,
      rating: 5
    },
    {
      name: 'ข้าวผัดทะเล',
      description:
        'ข้าวผัดทะเล ที่ยกทะเลมาในกระทะผัดให้คุณพร้อมทานรวมไปถึงซอสสุดพิเศษเพื่อคนพิเศษอย่างคุณ ยังไม่ได้พูดถึงข้าวที่เรานำมาผัดถูกคัดสรรค์อย่างดีเพื่อให้ข้าวเรียงเม็ดสวยและกระจายตัวกันอย่างสวยงามเพื่อคุณคนพิเศษ',
      img: 'https://shorturl.asia/glb13',
      price: 70,
      rating: 6
    },
    {
      name: 'ก๋วยเตี้ยวเนื้อวากิว',
      description:
        'ก๋วยเตี้ยวเนื้อวากิว เนื้อวากิวคัดพิเศษจากประเทศญี่ปุ่น มีมาเบิลสกแประมาณ 5 และเป็นเกรด A5 เพื่อคุณคนพิเศษ มาพร้อมกับน้ำซุปที่เคี่ยวอย่างต่อเนื่องมานานหลายชม.และเส้นเหนียวนุ่มพร้อมบริการคุณ',
      img: 'https://shorturl.asia/TPFdI',
      price: 95,
      rating: 8
    },
    {
      name: 'สุกี้ทะเลรวม',
      description:
        'สุกี้ทะเลรวมที่ยกทะเลทะเลรวมมาให้คุณ รวมไปถึงวุ้นเส้นและผักที่สดและสะอาท เพื่อเก็บความอร่อยไว้ในทุกอนูของผักและวุ่นเส้น รวมไปถึงซอสที่เราใช้ในการผัดเพื่อให้รสชาติเข้าเนื้อพร้อมเสริฟความสุขให้คุณ',
      img: 'https://shorturl.asia/xUrDT',
      price: 100,
      rating: 2
    },
    {
      name: 'ตำข้าวโพดไข่เค็มกุ้งสด',
      description:
        'ส้มตำข้าวโพดไข่เค็มกุ้งสด กุ้งสดตัวโตๆมาพร้อมกับความสดที่ไม่เป็นสองรองใคร ข้าวโพดที่สุกกำลังพอดี รวมไปถึงไข่เค็มที่คุณภาพไม่แพ้ใครเมื่อนำมารวมกันจะเป็นส้มตำข้าวโพดไข่เค็มที่คุณต้องมาลิ้มลองซักครั้ง',
      img: 'https://shorturl.asia/XJNlA',
      price: 99,
      rating: 2
    }
  ])

  return { menu_list }
})
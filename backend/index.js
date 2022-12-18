import  express, { response }  from "express";
import * as mindee from "mindee";
import cors from 'cors';
import authRouter from './routes/authRouter'
import recordsRouter from './routes/recordsRouter'
import multer from "multer";
const mindeeClient = new mindee.Client({apiKey:"6606579fbe76a733f811d96b84725364"})


const app = express();

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+ file.originalname)
    }
  })
  
const upload = multer({ storage })

app.post('/parse',  upload.single('file'), (req,res)=>{
    const file = req.file;
    console.log(file)
    const parseInvoice = async () => {
        try {
            const doc = mindeeClient.docFromPath(`C:/Users/Admin/Desktop/invoiceapp/backend/uploads/${file.filename}`);
            const resp = await doc.parse(mindee.InvoiceV4);
    
            
            const invoiceNumber = resp.document.invoiceNumber?.value;
            const customerName = resp.document.customerName?.value;
            const customerAddress = resp.document.customerAddress?.value;
            const supplierName = resp.document.supplierName?.value
            const supplierAddress = resp.document.supplierAddress?.value
            const invoiceDate = resp.document.date?.value;
            const currency = resp.document.locale?.currency;
            const totalAmount= resp.document.totalAmount?.value;
            const totalNet= resp.document.totalNet?.value;
            const totalTax = resp.document.totalTax?.value;
            
    
            console.log(invoiceNumber);

            res.json({
              invoiceNumber: invoiceNumber,
              customerName: customerName,
              customerAddress: customerAddress,
              supplierName: supplierName,
              supplierAddress: supplierAddress,
              invoiceDate: invoiceDate,
              currency: currency,
              totalAmount: totalAmount,
              totalNet: totalNet,
              totalTax: totalTax
              });
    
        } catch (error) {
            console.log(error);
        }
        
    }
    
     parseInvoice();
})

app.use('/auth', authRouter);
app.use('/records', recordsRouter);


app.listen(8800, ()=>{
    console.log("Connected to server");
})
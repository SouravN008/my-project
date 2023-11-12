import { Controller, Delete , Get , Post , Put , Param } from "@nestjs/common/decorators";
import { bookService } from "./book.service";
@Controller("book")
export class BookController {
     public bookService : bookService = new bookService ();
  //add book
  @Post('/add') 
  addBook () : string {
     return this.bookService.addBook();
  }
  //delete book
  @Delete('/delete')
  deleteBook () : string {
     return this.bookService.deleteBook();
  }
  //update book
  @Put('/update')
  updateBook (): string {
     return this.bookService.updateBook();
  }
   //Find all books 
   @Get('/findAll')
   findAllBooks () : string {
     return this.bookService.findBooks();
   }
  
}
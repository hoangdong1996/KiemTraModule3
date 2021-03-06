import {BookService} from './../book.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-readed-book',
  templateUrl: './readed-book.component.html',
  styleUrls: ['./readed-book.component.css']
})
export class ReadedBookComponent implements OnInit {
  books: any[];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.findAll().subscribe(
      result => {
        this.books = result;
      });
  }

  change(book: any) {
    this.bookService.change(book.id, book.name, book.read).subscribe(
      result => {
        alert('Đọc lại');
        this.ngOnInit();
      },
      error => {
        alert('Thất bại');
      }
    );
  }
}

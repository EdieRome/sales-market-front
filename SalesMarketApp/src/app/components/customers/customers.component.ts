import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers/customers.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {

  data: any[] = [];
  newCustomer: any = {};

  constructor(private service: CustomersService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(data => {
      this.data = data;
    });
  }

  create() {
    this.service.add(this.newCustomer);
  }

  update(customer: Customer) {
    this.service.update(customer)
  }

  delete(id: number) {
    this.service.delete(id);
  }
}

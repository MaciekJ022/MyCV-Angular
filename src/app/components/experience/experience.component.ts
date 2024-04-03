import { CommonModule, } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
    @Input() value!: string
 }

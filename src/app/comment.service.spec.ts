import { TestBed } from '@angular/core/testing';

import { commentService } from './comment.service';

describe('CommentService', () => {
  let service: commentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(commentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

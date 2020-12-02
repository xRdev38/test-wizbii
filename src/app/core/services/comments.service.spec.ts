import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentsService } from './comments.service';

describe('CommentsService', () => {
  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CommentsService ]
    });
  });

  describe('GetAll', () => {
    let commentsService: CommentsService;
    let httpTestingController: HttpTestingController;
    let mockComments: any;

    beforeEach( () => {
      commentsService = TestBed.get(CommentsService);
      httpTestingController = TestBed.get(HttpTestingController);
      mockComments = {
        id: '1',
        body: 'Bonjour...',
        createdAt: '2020-11-09T19:20+01:00',
        profile: '55',
        thanx: true,
        thanxCount: 1
      };
    });

    it('should GET a list of tags', () => {
      commentsService.getAll().subscribe((data) => {
        expect(data).toEqual(mockComments);
      });

      const request = httpTestingController.expectOne('/comments');
      request.flush(mockComments);
      httpTestingController.verify();
    });
  });

  describe('GetById', () => {
    let commentsService: CommentsService;
    let httpTestingController: HttpTestingController;
    let mockComments: any;

    beforeEach( () => {
      commentsService = TestBed.get(CommentsService);
      httpTestingController = TestBed.get(HttpTestingController);
      mockComments = {
        id: '2',
        body: 'Bonjour...',
        createdAt: '2020-11-09T19:20+01:00',
        profile: '565',
        thanx: true,
        thanxCount: 0
      };
    });

    it('should GET a tag by ID', () => {
      commentsService.getById('2').subscribe((data) => {
        expect(data).toEqual(mockProfiles);
      });

      const request = httpTestingController.expectOne('/comments/2');
      request.flush(mockProfiles);
      httpTestingController.verify();
    });
  });
});

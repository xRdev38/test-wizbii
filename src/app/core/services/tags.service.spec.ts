import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TagsService } from './tags.service';

describe('TagsService', () => {
  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ TagsService ]
    });
  });

  describe('GetAll', () => {
    let tagsService: TagsService;
    let httpTestingController: HttpTestingController;
    let mockTags: any;

    beforeEach( () => {
      tagsService = TestBed.get(TagsService);
      httpTestingController = TestBed.get(HttpTestingController);
      mockTags = {
          id: 1,
          tagName: 'finance'
      };
    });

    it('should GET a list of tags', () => {
      tagsService.getAll().subscribe((data) => {
        expect(data).toEqual(mockTags);
      });

      const request = httpTestingController.expectOne('/tags');
      request.flush(mockTags);
      httpTestingController.verify();
    });
  });

  describe('GetById', () => {
    let tagsService: TagsService;
    let httpTestingController: HttpTestingController;
    let mockTags: any;

    beforeEach( () => {
      tagsService = TestBed.get(TagsService);
      httpTestingController = TestBed.get(HttpTestingController);
      mockTags = {
          id: 2,
          tagName: 'contrôle de gestion'
      };
    });

    it('should GET a tag by ID', () => {
      tagsService.getById('2').subscribe((data) => {
        expect(data).toEqual(mockTags);
      });

      const request = httpTestingController.expectOne('/tags/2');
      request.flush(mockTags);
      httpTestingController.verify();
    });
  });
});

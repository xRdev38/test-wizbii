import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ArticlesService ]
    });
  });

  describe('GetAll', () => {
    let articlesService: ArticlesService;
    let httpTestingController: HttpTestingController;
    let mockArticles: any;

    beforeEach( () => {
      articlesService = TestBed.get(ArticlesService);
      httpTestingController = TestBed.get(HttpTestingController);
      mockArticles = {
        id:"1",
        description:"Desc",
        body:"Salut !",
        tagList:[
           "1",
           "2",
           "3"
        ],
        createdAt: "2020-11-09T19:20+01:00",
        updatedAt: "",
        profile: "666"
      };
    });

    it('should GET a list of tags', () => {
      articlesService.getAll().subscribe((data) => {
        expect(data).toEqual(mockArticles);
      });

      const request = httpTestingController.expectOne('/articles');
      request.flush(mockArticles);
      httpTestingController.verify();
    });
  });

  describe('GetById', () => {
    let articlesService: ArticlesService;
    let httpTestingController: HttpTestingController;
    let mockArticles: any;

    beforeEach( () => {
      articlesService = TestBed.get(ArticlesService);
      httpTestingController = TestBed.get(HttpTestingController);
      mockArticles = {
        id:"4",
        description:"Description",
        body:"Bonjour!",
        tagList:[
           "5",
           "2",
           "3"
        ],
        createdAt: "2020-11-19T19:20+01:00",
        updatedAt: "",
        profile: "77"
      };
    });

    it('should GET a tag by ID', () => {
      articlesService.getById('2').subscribe((data) => {
        expect(data).toEqual(mockProfiles);
      });

      const request = httpTestingController.expectOne('/articles/4');
      request.flush(mockProfiles);
      httpTestingController.verify();
    });
  })
});

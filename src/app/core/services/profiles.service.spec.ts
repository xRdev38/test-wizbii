import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProfilesService } from './profiles.service';

describe('ProfilesService', () => {
  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ProfilesService ]
    });
  });

  describe('GetAll', () => {
    let profilesService: ProfilesService;
    let httpTestingController: HttpTestingController;
    let mockProfiles: any;

    beforeEach( () => {
      profilesService = TestBed.get(ProfilesService);
      httpTestingController = TestBed.get(HttpTestingController);
      mockProfiles = {
        id: '666',
        firstname: 'Serge',
        lastname: 'Koutoan',
        desc: 'my bio',
        image: '/image/avatar.jpg'
      };
    });

    it('should GET a list of tags', () => {
      profilesService.getAll().subscribe((data) => {
        expect(data).toEqual(mockProfiles);
      });

      const request = httpTestingController.expectOne('/profiles');
      request.flush(mockProfiles);
      httpTestingController.verify();
    });
  });

  describe('GetById', () => {
    let profilesService: ProfilesService;
    let httpTestingController: HttpTestingController;
    let mockProfiles: any;

    beforeEach( () => {
      profilesService = TestBed.get(ProfilesService);
      httpTestingController = TestBed.get(HttpTestingController);
      mockProfiles = {
        id: '55',
        firstname: 'Léa',
        lastname: 'Beli',
        desc: 'my bio',
        image: '/image/avatar.jpg'
      };
    });

    it('should GET a tag by ID', () => {
      profilesService.getById('55').subscribe((data) => {
        expect(data).toEqual(mockProfiles);
      });

      const request = httpTestingController.expectOne('/profiles/55');
      request.flush(mockProfiles);
      httpTestingController.verify();
    });
  });
});

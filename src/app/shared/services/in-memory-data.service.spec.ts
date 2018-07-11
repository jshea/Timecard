import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {

  describe('createDb', () => {
    it('should return a collection of timecard objects', () => {
      const service = new InMemoryDataService();
      const db = service.createDb();

      db.timecards.forEach(
        (timecard) => {
          expect(timecard.userName.length).toBeGreaterThan(0);
        }
      );

    });
  });

});

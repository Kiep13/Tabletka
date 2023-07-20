import { Medicine, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { PrismaService } from '@core/services';
import { IndexManagerService } from '@elastic/services';
import { Indexes } from '@elastic/enums';
import { ISearchResult } from '@elastic/interfaces';

@Injectable()
export class MedicineService {
  constructor(private readonly prismaService: PrismaService,
              private readonly indexManagerService: IndexManagerService) {}

  public async getMedicines(searchTerm: string): Promise<Medicine[]> {
    const searchResults = await this.indexManagerService.runQuery<ISearchResult<Medicine>>(Indexes.Medicines, {
      query: {
        match_phrase_prefix: {
          title: searchTerm
        }
      },
      from: 0,
      size: 5
    });

    return searchResults.body.hits.hits.map((item) => {
      console.log(item);
      return item._source;
    });
  }

  public async createMedicine(data: Prisma.MedicineCreateInput): Promise<Medicine> {
    const createdMedicine = await this.prismaService.medicine.create({
      data,
    });

    await this.indexManagerService.insertDocumentIntoIndex(Indexes.Medicines,createdMedicine);

    return createdMedicine;
  }
}

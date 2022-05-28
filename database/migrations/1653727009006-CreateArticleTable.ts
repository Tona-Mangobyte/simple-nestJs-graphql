import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateArticleTable1653727009006 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const columns: TableColumn[] = [
            new TableColumn({
                name: 'id',
                type: 'integer',
                isPrimary: true,
                unsigned: true,
                isGenerated: true,
                generationStrategy: 'increment',
                isNullable: false,
            }),
            new TableColumn({
                name: 'title',
                type: 'varchar',
                isNullable: false,
            }),
            new TableColumn({
                name: 'content',
                type: 'varchar',
                isNullable: true,
            }),
        ];
        const article: Table = new Table({ name: 'articles', columns })
        await queryRunner.createTable(article);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('articles')
    }

}

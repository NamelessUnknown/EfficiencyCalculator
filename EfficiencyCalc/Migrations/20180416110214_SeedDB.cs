using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace EfficiencyCalc.Migrations
{
    public partial class SeedDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO PageCount (ads,associations,department,inspectedPages,shift,timeSpentOnAds,worker) " +
                "VALUES (30,12,0,321,0,3600,'Kowalski')");
            migrationBuilder.Sql("INSERT INTO PageCount (ads,associations,department,inspectedPages,shift,timeSpentOnAds,worker) " +
                "VALUES (0,21,0,450,0,0,'Nowak')");
            migrationBuilder.Sql("INSERT INTO PageCount (ads,associations,department,inspectedPages,shift,timeSpentOnAds,worker) " +
                "VALUES (153,9,1,285,1,0,'Pawłowicz')");
            migrationBuilder.Sql("INSERT INTO PageCount (ads,associations,department,inspectedPages,shift,timeSpentOnAds,worker) " +
                "VALUES (0,12,1,845,1,0,'Jaśkowiak')");
            migrationBuilder.Sql("INSERT INTO PageCount (ads,associations,department,inspectedPages,shift,timeSpentOnAds,worker) " +
                "VALUES (0,12,2,321,2,0,'Walenciuk')");
            migrationBuilder.Sql("INSERT INTO PageCount (ads,associations,department,inspectedPages,shift,timeSpentOnAds,worker) " +
                "VALUES (0,12,2,321,2,0,'Wojtowiak')");
            migrationBuilder.Sql("INSERT INTO PageCount (ads,associations,department,inspectedPages,shift,timeSpentOnAds,worker) " +
                "VALUES (0,12,0,321,0,0,'Sędek')");
            migrationBuilder.Sql("INSERT INTO PageCount (ads,associations,department,inspectedPages,shift,timeSpentOnAds,worker) " +
                "VALUES (0,12,0,321,1,0,'Kownacki')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
